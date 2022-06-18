/// <reference types="cypress" />

import {Given, When, Then  } from "cypress-cucumber-preprocessor/steps";
import SearchPage from './SearchPage'

Given ('i open index page', () =>{
    SearchPage.visit()
})

When ('using search page', () =>{
    SearchPage.FIllSearchBox
})

Then ('getting the result', () =>{
    SearchPage.TheResult
})