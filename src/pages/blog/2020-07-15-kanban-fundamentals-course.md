---
templateKey: blog-post
title: Notes from Kanban Fundamentals Pluralsight Course
date: 2020-07-15T05:04:10.000Z
featuredpost: true
featuredimage: /img/kanban-pluralsight.png
description: Steve Smith's Pluralsight course Kanban Fundamentals is a great introduction to the concept of Kanban.
tags:
  - software development
  - coding
  - pluralsight
  - trello
---

I recently completed **[Kanban Fundamentals](https://app.pluralsight.com/library/courses/kanban-fundamentals/table-of-contents)** by Steve Smith. Here are my notes:

Basic Concepts
--

* "Kanban" is Japanese for "signboard" or "billboard"
  * Literally "visual card"
* In manufacturing, a kanban is an "order card" used to restock goods "just in time" to reduce inventory in order to improve the flow of production
  * First introduced as part of Toyota Production System in mid-20th century
  * In this system, components are only produced in response to demand for these components from further down the line, rather than earlier stations indiscriminately producing new components, whether they are required or not
* Kanban (capital K) = the process
* kanban (lowercase k) = a particular card, sign, token, etc. used within process
* Implementing Kanban ->
  * improved quality of work
  * faster turnaround
  * better identification (and therefore elimination) of bottlenecks
  * reduction of time work spends in queue (time which is generally considered wasted)
  * improved teamwork
  * reduction of wasted effort
* Kanban systems in the real world
  * airports - your ticket has your gate number, flight departure time, etc, while the airport has signs to certain gate numbers and clocks (or you have your smartphone); the "kanban card" that is your ticket allows you to self-organize instead of depending on airline staff to direct you to your gate
  * coffee shops/restaurants
  * blood donations
* Controlling the number of kanban tokens in use in a given system impacts the value of each of those kanban tokens (in much the same way that the Federal Reserve changing the money supply impacts the value of money in the system)
* Should you maximize capacity utilization? i.e. Should a team work like a cup that should be kept full (busy, productive, etc.) at all times?
  * No! Think about a highway at 100% capacity utilization vs. a highway at 5% capacity utilization
    * the former is stop-and-go traffic; the latter is an enjoyable drive with lots of empty space for all the cars
    * the former is actually *less* productive than the latter; the jam-packed highway holds more cars, but the open highway actually gets those cars where they're going
    * The value of a highway is in *flow*, rather than in car storage
* Kanban is about maximizing flow by controlling queues and capacity utilization
* **Two basic principles of Kanban**
  * **Visualize your work**
    * Allows you (and others) to see what you're dealing with
    * Reduces stress
    * Reduces likelihood of forgetting important work items
    * Provides insight
    * Improves your ability to make good choices:
      * What should you work on now?
      * What more can you commit to? Is it time to start saying "no"?
      * Which items are blocked?
      * How long does it take new work to get done?
  * **Limit your WIP (work in process)**
    * Reduces waste
    * Improves quality
    * Improves flow
    * people aren't actually good at multitasking
    * Little's Law - Length of Queue = arrival rate times average wait time
      * Therefore, wait time = length of queue divided by arrival rate
      * Therefore, cycle time = number of WIP divided by throughput (the rate at which these items are completed)
* Cycle Time and Lead Time
  * Lead time clock runs from request made to delivery completed
  * Cycle time clock runs from work beginning and item (product, etc.) being ready for delivery
  * Lead time is what the customer sees
  * Cycle time is a mechanical measure of process capability
* Two ways to reduce cycle time:
  * Increase throughput
    * generally expensive or outside of your control
  * Reduce WIP
    * a policy decision with no immediate cost
    * increases time spent performing value-added work
* Value stream mapping - a way to determine which portions of a system are adding value and which are adding waste
  * For each stage of a process, the value stream map shows both the active time spent working on the item and the time the item spent waiting to be worked on
* Efficiency = total time doing value-added work/total time item spent in the process (lead time + cycle time)
* Resources: *Kanban* by David Anderson and *Personal Kanban*

Personal Kanban
--

* People these days are busy. **Really Busy**
* Personal Kanban is about using the principles of Kanban from system workflow and appying them to your life's workflow (lifeflow?)
* To-Do lists are great for small tasks or sets of tasks, but they don't scale well, and they don't provide any prioritization. They're also pretty hard to alter as needed, and they don't provide any visualization of flow

From *Personal Kanban*: "To-do lists: the last bastion for the organizationally damned. They're the embodiment of evil... They must be stopped."

* Rules of Personal Kanban - Visualize your work and limit WIP
* Getting started:
  * Materials - pick your medium: sticky notes, Trello, etc.
    * If you decide to use Trello, [here's how](https://ilyana.dev/blog/2020-06-04-setting-up-trello/) to set up a Trello account.
  * Establish your value stream - the organization of the flow of tasks through your life
    * Should include categories like Ready, Doing, Done, and might include Blocked or additional categories
  * Make your Backlog Explicit - write down *Everything* - try to get everything you want to get done out of your head and into writing
    * Focus on completeness, rather than organization at this point
  * Organize your tasks into your value stream - Are some already partially completed? Which ones are you ready to work on next?
  * Establish a WIP limit in order to limit WIP (generally between 3 and 5 is a good starting point)
    * Smaller WIP limit -> things get done faster (Little's Law)
  * Complete some of the tasks in the Doing column if possible
  * Prioritize the tasks in Ready and Doing based on deadlines, how much time you currently have, etc.
  * Reflect on the tasks you've completed and the tasks in your Done column
* Sometimes, tasks depend on external factors, and you need to wait on those factors
  * Place tasks you are *actively* waiting on external factors for into your Blocked column
  * "This is **not** a procrastination box"
  * You can add additional context like deadlines, etc.
  * You should prioritize blocked items that become ready over items in the ready column
* You can make a Today column populated with items from Ready, since people tend to organize their lives in terms of days
* Personal Kanban makes you more productive, efficient, and effective
  * getting things done by limiting WIP
  * working smarter not harder by focusing on value stream
  * getting the right work done at the right time through context and prioritization
* Planning is important, but it needs to be done effectively or it turns into waste and meaningless overhead
  * **Over**planning is as much a problem as not planning at all because it interrupts flow and leads to waste
  * Instead, make planning a part of that flow and do it continuously
    * add additional details only as needed
  * Time your planning when it can be most useful
* **The Time-Management Matrix**
  * Divide your tasks into four quadrants -
    * Important, not urgent
      * Tasks that improve quality and efficiency over time
      * More of a long-term investment
      * "Quality Quadrant"
      * "Quadrant of Kaizen"
        * Kaizen is Japanese for "improvement"
      * "sharpening the saw"
      * investments into future quality
    * Important and urgent
      * Must be done, and must be done quickly
      * "Mission Critical"
      * "Emergencies"
      * Are these tasks preventable? i.e. Could you have done these earlier, planned better, or obviated them altogether in order to prevent emergencies
      * Focus on avoiding emergencies rather than reacting to them
    * Neither important nor urgent
      * "time wasters," "hobbies," "pleasant activities"
      * "Waste"
      * "Organic Quadrant"
      * Relax, Restore, Recharge
    * Not important, but urgent
      * Social interruptions and meetings
      * Tend to happen when they happen
      * Quadrant of Deception
        * Might seem important/productive, but is probably just a waste of time
      * Social Investment
      * Not always a waste, but you should minimize time spent and maximize the value of these tasks
* Prioritization
  * Avoid using a low, medium, high prioritization scheme, as they don't offer enough granularity
  * One good option is to use a queue instead. It's simple and there's no ambiguity
    * Order your ready column by priority, highest at the top
    * Identify the most pressing tasks in your backlog and move those to the top as well
    * Periodically reassess
  * You could also use priority filters
    * Create a few columns to the left of Ready - Priority 2 and Priority 1 (from left to right)
    * There is no priority organization within the columns; the columns themselves provide the granularity
      * WIP limits get larger as priority decreases
    * Insert new tasks into columns by priority as they arrive or pull them out of the backlog as you have room
* Portable Kanban with a file folder for tasks that overlap between locations
  * or use an electronic tool
* *Personal Kanban* is a useful book

Team Kanban
--

* Kanban in Manufacturing
  * information moves upstream, parts/things move downstream
  * Rules in Manufacturing
    * customer withdraws only items and quantities as specified by withdrawal kanban
    * upstream processes only produce items and quantities as specified by production kanban
    * no items are produced or moved without a kanban
    * a kanban should accompany each item
      * like a barcode
    * Defects and incorrect quantities are never sent downstream
    * the number of kanbans in a system is carefully controlled and minimized
  * Properties of Kanban in manufacturing
    * physical
    * limit WIP
    * continuous flow
    * pull system
      * downstream process pulls items from upstream process
      * rather than upstream process pushing items (often unneeded ones) onto the downstream processs
    * self-directing
    * visual
    * signals
    * kaizen - continuous improvement
    * attached to their items
* Properties of Kanban in Software Development
  * signals
  * self-directing
  * kaizen
  * pull
  * limited WIP
  * continuous flow
  * physical?
  * attached?
  * visual?
* Virtual or inferred work requests
  * in a grocery store, a full shelf implies that no additional restocking/production is needed, while an empty shelf serves as a virtual work request indicating that restocking/production is required
  * in software, the need to perform work is inferred from gaps in the system
* The Kanban Method
  * Properties
    * Visualize workflow
    * Limit WIP
    * Measure/manage flow
    * Make process policies explicit
    * Use models to recognize improvement opportunities
  * Recipe for Success:
    * Focus on quality
      * Teams spend **a lot** of time on debugging/fixing defects
      * It's better to prioritize quality up front
      * Use techniques like development practices or available tools
    * Reduce WIP
      * Improves quality
      * Gets stuff done faster
    * Deliver often
      * Deliver working software frequently
      * Reduced WIP -> shorter lead time -> frequent releases -> building trust
    * Balance demand against throughput
      * not accepting new work at a rate that exceed's your team's rate of completing work
      * limit team's overall WIP to current WIP
      * team can pull work rather than having it pushed in
      * bottlenecks are made more visible
      * slack will be created in some areas - this is good!
    * Prioritize
      * often outside team's direct control
        * a team which has built trust can influence prioritization
    * Attack sources of variability
      * variability -> larger WIP and larger lead times
      * Many sources of variability: policies, priorities
      * variability is not inherently bad, but *unnecessary* variability should be eliminated
      * You cannot add value without adding variablility, but you *can* add variability without adding value, and this is to be avoided
* Any process is a collection of policies that govern behavior
  * These policies should be made explicit, since changing them can vastly improve productivity
* Implementing Kanban for your team
  * Define your process and its endpoints
    * limit process changes to areas over which you have control
  * Identify types of work/varieties of inputs
  * Sketch/Model workflow
  * Create a card wall
  * Establish and visualize queues and buffers
    * buffers should be kept small
      * their purpose is to reduce idle parts of the system, trading cycle time for resource utilization
  * Consider creating swim lanes
    * represent a prioritization policy
    * allocate certain amount of capacity to certain work-item types
    * can also be used to differentiate tasks by the team member or workstation working on an item
    * provide an additional visualization of information about the process
      * other ways of doing this include colors, etc.
  * Create cards!
    * Include information like date added, start date, required delivery date, electronic tracking number, description, assigned engineer, customer point-of-contact, status information, etc. as needed
    * The key is to provide important information quickly
* Electronic Kanban systems:
  * AgileZen
  * Trello
  * LeanKit Kanban
  * TargetProcess
* Next steps:
  * Make policies explicit
    * e.g. definition of done, how to make prioritization decisions, etc.
  * Limit WIP
  * Manage queues
    * better to manage your team based on queues (leading indicator of problems) rather than based on cycle time (trailing indicator)
  * Measure flow in terms of cycle time and lead time
* Resources: *Kanban* by David Anderson and *The Principles of Product Development Flow" by Donald Reinertsen (only if you've already read Anderson's book)

Summary
--

* **Basic Concepts**
  * Kanban provides a way of visualizing work
  * Kanban systems are often used in the real world
  * Kanban is about maximizing *flow* rather than capacity utilization
  * **Visualize work and limit WIP**
  * Little's Law shows that response time improves directly with reduction in WIP
  * Value Stream Maps can be used to identify waste and quantify process efficiency
* **Personal Kanban**
  * To-do lists lack context and prioritization
  * Personal Kanban provides visualization and organization, leading to better decision-making and greater effectiveness
  * 2 rules - **visualize work and limit WIP**
  * Focus on most valuable tasks first when prioritizing
  * Be creative!
* **Team Kanban**
  * Kanban systems originated in manufacturing
    * They facilitate process improvements and eliminate waste
  * Software development teams can benefit from the improvements of Kanban by implementing pull-based systems
  * Implementing Kanban -> improved lead times, improved quality, increased trust
  * Implementing Kanban at the team level can be done with minimal effort
  * There are many electronic Kanban tools available

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
