import React from "react"
import "../../css/pricesAlt.module.css"
import { FaCheck } from "react-icons/fa"
import { FaWindowMinimize} from "react-icons/fa"


 export default function App() {
   return (
     <div className="App">
       <div className="container" />
       <div id="main" class="container">
         <div className="container price_container">
           <div className="pricing_plans_before">
             <h1>Take Your Business Next Level</h1>
             <h2>
               It takes <span className="freetrial">only a few minutes</span>
               . No long term contracts.
             </h2>
           </div>
           <div className="pricing_plans">
             <div className="row">
               <ul
                 id="pricing_placeholder"
                 className="col-md-2 col-sm-3 col-xs-12"
               >
                 <li className="invisible">
                   <h1>&nbsp;</h1>
                 </li>
                 <li class="invisible">
                   <h2>
                     <span>&nbsp;</span>
                   </h2>
                 </li>
                 <li className="invisible">
                   <h4>per month</h4>
                 </li>
                 <li>
                   <h3>Best for</h3>
                 </li>
                 <li>
                   <p>Services</p>
                 </li>
                 <li>
                   <p>Reputation/ Review Management</p>
                 </li>
                 <li>
                   <p>Google My Business Optimization</p>
                 </li>
                 <li>
                   <p>Search Engine Optimization</p>
                 </li>
                 <li>
                   <p>Web Design and Development</p>
                 </li>
                 <li>
                   <p>Pay Per Click Advertising</p>
                 </li>
                 <li>
                   <p>Facebook Social Media Marketing</p>
                 </li>
                 <li>
                   <p>Email Marketing Campaigns</p>
                 </li>
                 <li>
                   <p>Content Marketing Strategy</p>
                  
                 </li>
                 {/* <li>
                   <p>Setup Fee
                    <br></br>
                   </p>
                 </li> */}
                 
                 <li className="almost_there">
                   {/* <p>Transaction costs</p> */}
                   <br></br>
                 </li>
               </ul>
               <ul class="col-md-2 col-sm-3 col-xs-12 ">
                 <li>
                   <h1>Basic</h1>
                 </li>
                 <li>
                   <h2>
                     <span>
                       $549
                     </span>
                   </h2>
                 </li>
 
                 <li>
                   <h4>per month</h4>
                 </li>
                 <li>
                   <h3>Starter</h3>
                 </li>
                 <li>
                   <p>
                     <br></br>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaWindowMinimize className="fawindow"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaWindowMinimize className="fawindow"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaWindowMinimize className="fawindow"/>
                     </strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strike><FaWindowMinimize className="fawindow"/></strike>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strike><FaWindowMinimize className="fawindow"/></strike>
                   </p>
                 </li>
                 <li class="almost_there">
                   <p>
                     <strike><FaWindowMinimize className="fawindow"/></strike>
                   </p>
                 </li>
                 
                 <li class="signupzone">
                   <a class="main_call_to_action" href="/signup/basic">
                     Get Started
                   </a>
                 </li>
                 <br></br>
               </ul>
               <ul class="col-md-2 col-sm-3 col-xs-12 suggested">
                 <li>
                   <h1>Standard</h1>
                 </li>
                 <li>
                   <h2>
                     <span>$1299</span>
                   </h2>
                 </li>
                 <li>
                   <h4>per month</h4>
                 </li>
                 <li>
                   <h3>Growth</h3>
                 </li>
                <li>
                   <p>
                     <br></br>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaWindowMinimize className="fawindow"/>
                     </strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strike><FaWindowMinimize className="fawindow"/></strike>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strike><FaWindowMinimize className="fawindow"/></strike>
                   </p>
                 </li>
                 <li class="almost_there">
                   <p>
                     <strike><FaWindowMinimize className="fawindow"/></strike>
                   </p>
                 </li>
                 
                 <li class="signupzone">
                   <a class="main_call_to_action" href="/signup/basic">
                     Get Started
                   </a>
                 </li>
                 <br></br>
               </ul>
               <ul class="col-md-2 col-sm-3 col-xs-12 ">
                 <li>
                   <h1>Premium</h1>
                 </li>
                 <li>
                   <h2>
                     <span>$2300</span>
                   </h2>
                 </li>
                 <li>
                   <h4>per month</h4>
                 </li>
                 <li>
                   <h3>Accelerate</h3>
                 </li>
                 <li>
                   <p>
                     <br></br>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/>
                     </strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strike><FaCheck className="facheck"/></strike>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strike><FaWindowMinimize className="fawindow"/></strike>
                   </p>
                 </li>
                 <li class="almost_there">
                   <p>
                     <strike><FaWindowMinimize className="fawindow"/></strike>
                   </p>
                 </li>
                 <li class="signupzone">
                   <a class="main_call_to_action" href="/signup/plus">
                     Sign up
                   </a>
                 </li>
               </ul>
               <ul class="col-md-2 col-sm-3 col-xs-12 ">
                 <li>
                   <h1>Ultra</h1>
                 </li>
                 <li>
                   <h2>
                     <span>$4299</span>
                   </h2>
                 </li>
                 <li>
                   <h4>per month</h4>
                 </li>
                 <li>
                   <h3>Enterprise</h3>
                 </li>
                 <li>
                   <p>
                     <br></br>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/></strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strong><FaCheck className="facheck"/>
                     </strong>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strike><FaCheck className="facheck"/></strike>
                   </p>
                 </li>
                 <li>
                   <p>
                     <strike><FaCheck className="facheck"/></strike>
                   </p>
                 </li>
                 <li class="almost_there">
                   <p>
                     <strike><FaCheck className="facheck"/></strike>
                   </p>
                 </li>
                 <li class="signupzone">
                   <a class="main_call_to_action" href="/signup/solid">
                     Sign up
                   </a>
                 </li>
               </ul>
               <div id="pricing_testimonials">
                 <div class="row">
                   <ul>
                     <li class="first col-md-6 col-sm-6 col-xs-12">
                       <div class="row testi_wrapper">
                   
                         
                         <strong>George - Awesome HVAC LLC &amp; CEO</strong>
                         <p>
                           "FrontSight is my #1 choice for digital marketing
                           because they have outperformed others I have used in the past. They rock."
                         </p>
                       </div>
                     </li>
 
                   
                   </ul>
                 </div>
               </div>
               <div class="pricing_sub_features">
                 <h2>
                   Yes, all plans come fully loaded with the following features
                 </h2>
                 <container className="container">


 
                 <div class="row">
                   <ul class="features_summary col-md-4 col-sm-4 col-xs-12">
                     <li>Free hosting</li>
                     <li>Review Microsite</li>
                     <li>Geolocation SEO</li>
                     <li>Secure Website (SSL)</li>
                     <li>Custom domain support</li>
                     <li>Client Dashboard</li>
                     <li>Monthly Reporting</li>
                   </ul>
                   <ul class="features_summary col-md-4 col-sm-4 col-xs-12">
                     <li>Competitor analysis</li>
                     <li>100% Satisfaction Gurantee</li>
                     <li>Multiple product variants</li>
                     <li>Brand Optimization</li>
                     <li>Keywords Targetting</li>
                     <li>Monthly Citations</li>
                     <li>SEO optimized URL's</li>
                   </ul>
 
                   <ul class="features_summary col-md-4 col-sm-4 col-xs-12">
                     <li>Local Directory Listings</li>
                     <li>Call Tracking</li>
                     <li>Product images and thumbnails</li>
                     <li>Syndicated Content</li>
                     <li>PPC Advertising Tiers</li>
                     <li>An easy to use backend system</li>
                     <li>Personal support</li>
                   </ul>
                 </div>
                 <br class="clearfix" />
                 </container>
 
                 {/* <a
                   class="col-md-6 col-md-push-3 col-sm-6 col-sm-push-3 col-xs-12"
                   id="features_link"
                   href="/features"
                 >
                   Take The Features Tour
                 </a> */}
               </div>
             </div>
             <div className="push" />
           </div>
         </div>
       </div>
     </div>
   );
 }
 


