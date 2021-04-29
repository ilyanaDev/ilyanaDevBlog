---
templateKey: blog-post
title: Creating a Downloadable .csv File in C#
date: 2021-04-29T18:05:10.000Z
featuredpost: true
featuredimage: /img/csv-download.png
description: It shouldn't be hard to download a .csv file from a C# application. Not really.
tags:
  - software development
  - coding
  - csv
  - razor pages
---

And in truth, downloading a csv is not all that complex at all. But since the internet gave conflicting advice, and it took me almost two hours to figure it out, here's what worked for me.

## Code

Below, I'll summarize the necessary code to make this work. If you prefer, this code is available in [this GitHub repo](https://github.com/ilyanaDev/CSVDownload).

### .cshtml.cs Code-Behind `OnPost()`

My goal was to have a page download a .csv at the push of a button. So, the code-behind of my Razor Page needed an `OnPost()` method to make that happen. It ended up looking like this:

```csharp
public ActionResult OnPost()
{
    // requires using System.Data
    DataTable dataTable = CsvCreator.createDataTable();

    // requires using System
    string filePath = "BlogPostsList-" + DateTime.Today.ToString("yyyy-MM-dd") + ".csv";

    // this is an extension method
    var output = dataTable.ToCsvByteArray();

    // requires using Microsoft.AspNetCore.Mvc;
    return new FileContentResult(output, "text/csv")
    {
        FileDownloadName = filePath
    };
}
```

First, the code creates the DataTable the .csv file will be generated from.

`filePath` will be the name of the output file.

A `byte[]` is created to be output as a .csv file.

The code returns a `FileContentResult` in .csv format containing the `byte[]` from above and named `filePath`.

### Get DataTable with `CsvCreator.createDataTable()`

The `CsvCreator` class you see above generates a DataTable. In a real app, it would probably take in a `List<T>` and generate the DataTable from that list. But for the purposes of the example, this simple class works well enough:

```csharp
public class CsvCreator
{
    public static DataTable createDataTable()
    {
        // this method creates a data table
        DataTable myDataTable = new DataTable();

        myDataTable.Columns.Add("DATE", typeof(string));
        myDataTable.Columns.Add("TITLE", typeof(string));
        myDataTable.Columns.Add("AUTHOR", typeof(string));

        myDataTable.Rows.Add("2020-12-29", "Gatsby Shadowing", "Ilyana");        
        myDataTable.Rows.Add("2021-02-23", "This is a blog post", "Joe");
        myDataTable.Rows.Add("1957-03-05", "There and back again", "Bilbo Baggins");
        myDataTable.Rows.Add("2000-01-01", "That's no moon", "Obi-Wan Kenobi");

        return myDataTable;
    } 
}
```

### `ToCsvByteArray()` Extension Method

This method does the grunt work of converting the `DataTable` into a `byte[]` containing the necessary commas and newLines for the .csv format. It is an extension method of `DataTable`. There's some pretty deep nesting in this method, but as it's all encapsulated here, I'm ok with that.

```csharp
// based on code from this article: https://www.c-sharpcorner.com/UploadFile/deveshomar/export-datatable-to-csv-using-extension-method/
public static byte[] ToCsvByteArray(this DataTable input)
{
    var stream = new MemoryStream();
    StreamWriter sw = new StreamWriter(stream);

    for (int i = 0; i < input.Columns.Count; i++)
    {
        sw.Write(input.Columns[i]);
        if (i < input.Columns.Count - 1)
        {
            sw.Write(",");
        }
    }
    sw.Write(sw.NewLine);
    foreach (DataRow row in input.Rows)
    {
        for (int i = 0; i < input.Columns.Count; i++)
        {
            if (!Convert.IsDBNull(row[i]))
            {
                string value = row[i].ToString();
                if (value.Contains(','))
                {
                    value = String.Format("\"{0}\"", value);
                    sw.Write(value);
                }
                else
                {
                    sw.Write(row[i].ToString());
                }
            }
            if (i < input.Columns.Count - 1)
            {
                sw.Write(",");
            }
        }
        sw.Write(sw.NewLine);
    }
    sw.Close();

    return stream.ToArray();

}
```

Here is the [full code sample](https://github.com/ilyanaDev/CSVDownload) the examples above are based on.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
