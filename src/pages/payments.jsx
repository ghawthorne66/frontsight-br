import React from "react"
import { Link } from "gatsby"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';



import Layout from "../components/Layout"
import CalendlyEmbed from "../components/CalendlyEmbedReact"
import SEO from "../components/SEO"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


const stripePromise = loadStripe("pk_test_o9fUh4ZGBa1PIcur17EGl6jJ");

function App() {
  return (
    <Elements stripe={stripePromise}>

    </Elements>
  );
};


