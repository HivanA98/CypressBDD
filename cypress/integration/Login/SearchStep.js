/// <reference types="cypress" />

import {Given, When, Then  } from "cypress-cucumber-preprocessor/steps";
import LoginPage from './SearchPage'

Given ('i open index page', () =>{
    LoginPage.visit()
})

When ('using search page', () =>{
    LoginPage.FIllSearchBox
})

Then ('getting the result', () =>{
    LoginPage.TheResult
})