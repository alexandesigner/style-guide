/*
 *
 * @ Main.jsx - v0.0.1
 *
*/

require('styles/scss/styles.scss');
require('styles/docs.scss');

/*
 * @ Imports Components
*/
import React from 'react';
import Block from 'components/Block.jsx';
import Header from 'components/Header.jsx';
import Content from 'components/Content.jsx';

/*
 * @ App Component
*/
class App extends React.Component {
  render() {
    return (
      <Block>

        <Header>
           <img className="logo" src="https://github.com/alexandesigner/style-guide/blob/master/src/images/logo.png" width="380" />

           <h5 className="header-title">
            CSS Framework based in SMASCS and OOCSS
           </h5>

           <small className="current-version">Currently v0.0.1</small>

           <a href="https://github.com/alexandesigner/alexandesigner.github.io/archive/master.zip" className="button button-primary button-large" target="_blank">
            Get Started
           </a>

        </Header>

        <Content>

          <h2 className="title">What is this?</h2>

          <p className="text">Style Guide provides a setup of styles using SMACSS and OOCSS for a fast and clean starting point.</p>

          <h2 className="title">Getting Started</h2>

          <p className="text">There are some ways to get started. First, see all download options available below, then choose the most suitable option for your need. Just that!</p>


          <div className="box-hgroup full-width">

            <h2 className="title">Hgroup</h2>




            <h1>Hgroup 1</h1>
            <h2>Hgroup 2</h2>
            <h3>Hgroup 3</h3>
            <h4>Hgroup 4</h4>
            <h5>Hgroup 5</h5>
            <h6>Hgroup 6</h6>

         </div>

         <div className="box-buttons full-width">

            <h2 className="title">Buttons</h2>



            <button className="button">
              Button Default
            </button>
            <button className="button button-primary">
              Button Primary
            </button>

            <button className="button button-outline">
              Button Outline
            </button>
            <button className="button button-success">
              Button Success
            </button>

            <button className="button button-large">
              Button Large
            </button>
            <button className="button button-small">
              Button Small
            </button>
         </div>

         <div className="box-breadcrumb full-width">
            <h2 className="title">Breadcrumb</h2>



            <div className="breadcrumb">
              <ul className="no-style">
                <li>
                  <a href="#" title="Link">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" title="Link">
                    Link
                  </a>
                </li>
                <li>
                    Link
                </li>
              </ul>
            </div>
          </div>

          <div className="box-alert full-width">
            <h2 className="title">Alerts</h2>

            <div className="alert">
                <button type="button" className="button button-clear close">
                  <i className="icon-cancel-3"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
            </div>
            <div className="alert alert-info">
                <button type="button" className="button button-clear close">
                  <i className="icon-cancel-3"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
            </div>

            <div className="alert alert-error alert-rounded">
                <button type="button" className="button button-clear close">
                  <i className="icon-cancel-3"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
            </div>
          </div>

          <div className="box-badge full-width">

            <h2 className="title">Badges and Labels</h2>


            <span className="badge badge-notification">
              2
            </span>

            <span className="badge badge-info">
              Badge
            </span>

            <span className="badge badge-success badge-rounded">
              Badge Rounded
            </span>

            <span className="badge badge-error">
              1
            </span>
          </div>

          <div className="box-form full-width">

            <h2 className="title">Input Field</h2>


            <div className="item-form">
              <label className="input-label" htmlFor="input-1">E-mail address</label>
              <input id="input-1" className="input-field" type="text" name="input-1" data-validate="required email" placeholder="user@example.com" />
            </div>
          </div>

          <div className="box-select full-width">

            <h2 className="title">Select Field</h2>


            <div className="select-field">
              <select name="select-name" id="select-name">
                <option id="1">Select name</option>
                <option id="2">Select name</option>
                <option id="3">Select name</option>
                <option id="4">Select name</option>
              </select>
            </div>
          </div>

          <div className="box-collapse full-width">
            <h2 className="title">Accordion</h2>
            <div className="collapse margin-bottom-40">
              <div className="collapse-item">
                <input id="collapse-one" type="checkbox" name="collapse-group" />
                <label htmlFor="collapse-one">Label One</label>
                <div className="collapse-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
              <div className="collapse-item">
                <input id="tab-two" type="checkbox" name="collapse-group" />
                <label htmlFor="tab-two">Label Two</label>
                <div className="collapse-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
              <div className="collapse-item">
                <input id="tab-three" type="checkbox" name="collapse-group" />
                <label htmlFor="tab-three">Label Three</label>
                <div className="collapse-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
            </div>
            <div className="collapse">
              <div className="collapse-item">
                <input id="tab-four" type="radio" name="collapse-group" />
                <label htmlFor="tab-four">Label One</label>
                <div className="collapse-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
              <div className="collapse-item">
                <input id="tab-five" type="radio" name="collapse-group" />
                <label htmlFor="tab-five">Label Two</label>
                <div className="collapse-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
              <div className="collapse-item">
                <input id="tab-six" type="radio" name="collapse-group" />
                <label htmlFor="tab-six">Label Three</label>
                <div className="collapse-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box-fields full-width">
            <h2 className="title">Radio Field</h2>
            <div className="radio">
              <input id="male" type="radio" name="gender" value="male" />
              <label htmlFor="male">Male</label>
              <input id="female" type="radio" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>

          </div>
          <div className="box-fields full-width">
            <h2 className="title">Toggle</h2>
            <div className="toggle">
              <input id="toggle-1" type="checkbox" className="toggle-input" />
              <label htmlFor="toggle-1" className="toggle-label">Toggle</label>
            </div>
            <div className="toggle activated">
              <input id="toggle-2" type="checkbox" className="toggle-input" />
              <label htmlFor="toggle-2" className="toggle-label">Toggle</label>
            </div>
            <div className="toggle disabled">
              <input id="toggle-3" type="checkbox" className="toggle-input" />
              <label htmlFor="toggle-3" className="toggle-label">Toggle</label>
            </div>

          </div>
          <div className="box-fields full-width">
            <h2 className="title">Checkbox Field</h2>
            <div className="checkbox">
              <input id="check1" type="checkbox" name="check" value="check1" />
              <label htmlFor="check1">Checkbox No. 1</label>
              <input id="check2" type="checkbox" name="check" value="check2" />
              <label htmlFor="check2">Checkbox No. 2</label>
            </div>
          </div>

          <div className="box-pagination full-width">
            <h2 className="title">Pagination</h2>

            <nav className="pagination align-center">
              <ul>
                <li>
                  <a href="#" aria-label="Previous" className="disable">
                    <i aria-hidden="false" className="icon-angle-left"></i>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li className="activated"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next" className="active">
                    <i aria-hidden="true" className="icon-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>

            <nav className="pagination pagination-rounded">
              <ul>
                <li>
                  <a href="#" aria-label="Previous" className="disable">
                    <i aria-hidden="false" className="icon-angle-left"></i>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li className="activated"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next" className="active">
                    <i aria-hidden="true" className="icon-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>

            <nav className="pagination pagination-clear align-right">
              <ul>
                <li>
                  <a href="#" aria-label="Previous" className="disable">
                    <i aria-hidden="false" className="icon-angle-left"></i>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li className="activated"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next" className="active">
                    <i aria-hidden="true" className="icon-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>


            <nav className="pagination">
              <ul>
                <li>
                  <a href="#" aria-label="Previous" className="disable">
                    <i aria-hidden="false" className="icon-angle-left"></i>
                  </a>
                </li>
                <li>
                  <span>2</span>
                </li>
                <li>
                  <input type="text" />
                </li>
                <li>
                  <span>162</span>
                </li>
                <li>
                  <a href="#" aria-label="Next" className="active">
                    <i aria-hidden="true" className="icon-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="box-article full-width">

            <article className="article">
              <header className="article-header">
                <h1 className="article-title">
                  Article
                </h1>
                <small className="article-meta">
                  Written by User on 22 April 2016. Posted in Blog
                </small>
                <p className="article-lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr />
              </header>
              <div className="article-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  <a href="#">Read more.</a>
                </p>
              </div>
            </article>
          </div>

          <div className="box-card full-width">
             <section className="card">
              <div className="card-content">
                Card Content
              </div>
            </section>
            <section className="card margin-top-40">
              <header className="card-header">
                <h2 className="card-title">
                  Card title
                </h2>
              </header>
              <div className="card-content">
                Card Content
              </div>
              <footer className="card-footer">
                Card footer
              </footer>
            </section>

            <div className="placeholder margin-top-40">
              Placeholder
            </div>

          </div>

          <div className="box-figures full-width">
            <h2 className="title">Figures</h2>
            <div className="grid-flex grid-flex--gutters grid-flex--cols-3 u-textCenter">
              <div className="grid-flex-cell">
                  <figure>
                    <img className="img-circle" src="https://github.com/alexandesigner/style-guide/blob/master/src/images/img1.png" />
                  </figure>
              </div>
              <div className="grid-flex-cell">
                <figure>
                  <img src="https://github.com/alexandesigner/style-guide/blob/master/src/images/img2.png" />
                  <figcaption>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </figcaption>
                </figure>
              </div>
              <div className="grid-flex-cell">
                <figure className="img-rounded">
                  <img src="https://github.com/alexandesigner/style-guide/blob/master/src/images/img3.png" />
                  <figcaption>
                    <strong>Lorem ipsum dolor sit amet</strong>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="box-grid-flex full-width">
            <h2 className="title">Grid Flex</h2>
            <div className="grid-flex grid-flex--full u-textCenter">
              <div className="grid-flex-cell"><div className="Demo content-1of1"></div></div>
            </div>
            <div className="grid-flex grid-flex--gutters grid-flex--cols-2 u-textCenter">
              <div className="grid-flex-cell"><div className="Demo content-1of2"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of2"></div></div>
            </div>
            <div className="grid-flex grid-flex--gutters grid-flex--cols-3 u-textCenter">
              <div className="grid-flex-cell"><div className="Demo content-1of3"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of3"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of3"></div></div>
            </div>
            <div className="grid-flex grid-flex--gutters grid-flex--cols-4 u-textCenter">
              <div className="grid-flex-cell"><div className="Demo content-1of4"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of4"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of4"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of4"></div></div>
            </div>
            <div className="grid-flex grid-flex--gutters grid-flex--cols-6 u-textCenter">
              <div className="grid-flex-cell"><div className="Demo content-1of6"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of6"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of6"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of6"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of6"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of6"></div></div>
            </div>

            <div className="grid-flex grid-flex--gutters grid-flex--cols-12 u-textCenter">
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
              <div className="grid-flex-cell"><div className="Demo content-1of12"></div></div>
            </div>
          </div>

          <div className="box-dialogs full-width">

            <a href="#dialog1" className="button button-info" data-dialog="modalDialog">Data Dialog</a>

            <a href="#dialog2" className="button button-error">Dialog (Ajax)</a>

            <div id="dialog1" className="overlay">
              <div className="dialog">
                <h2>Dialog box</h2>
                <a className="close" href="#">&times;</a>
              </div>
            </div>

            <div id="dialog2" className="overlay light">
              <a className="cancel" href="#"></a>
              <div className="dialog">
                <h2>Dialog box</h2>
                <div className="content">
                  <p>Click outside the dialog to close.</p>
                </div>
              </div>
            </div>


          </div>

        </Content>

         <a href="https://github.com/alexandesigner/style-guide" className="github">
          <img src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" />
         </a>

      </Block>
    );
  }
}

/*
 * @ Exports Global
*/
export default App;
