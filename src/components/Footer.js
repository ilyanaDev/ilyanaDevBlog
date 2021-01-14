import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/ilyanaDev.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="ilyanaDev"
            style={{ width: '18em', height: '8em' }}
          />
      <p>Copyright © 2021</p>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
              </div>
              <div className="column is-4 social">
              <form action="http://www.google.com/search" method="get">
    <input type="hidden" name="q" value="site:ilyana.dev"/>
    <input type="text" name="q" alt="search"/>
    <input type="submit" value="Search my Site with Google"/>
</form>

  <h1 style={{color: "002338"}}> </h1>

                <a title="twitter" href="https://twitter.com/ilyanaDev">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="github" href= "https://github.com/ilyanaDev?tab=repositories">
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
