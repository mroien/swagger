import fetch from 'node-fetch';

import LoginPage from '../../pageobjects/Login/login.page';

import * as siteData from '../../data/site.data';

import { postBody } from '../../pageobjects/Api/api.lib';

postBody.id = siteData.FIVE;
postBody.name = siteData.CAT;
postBody.status = siteData.UNAVAILABLE;
postBody.category.name = siteData.FELINE;
postBody.photoUrls[0] = siteData.CAT_LINK;
postBody.tags[0].name = siteData.TAG_NAME;

describe('Swagger API Update Test.', () => {
  it(`POST, create a Pet with the name: ${siteData.CAT} and ID: ${siteData.FIVE}`, async () => {
    const response = await fetch(siteData.BASE_URL, {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {'Content-Type': 'application/json'}
    });
    expect(response.ok);
  });

  it(`GET, verify the newly create Pet name is ${siteData.CAT}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.FIVE}`, { method: 'GET'})
    const res = await response.json();
    expect(res.name).toEqual(siteData.CAT);
  });

  it(`POST, verify the Pet name has updated to ${siteData.BOB}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.FIVE}`, { 
      method: 'POST',
      body: JSON.stringify({ "name": "Bob" }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    const res = await response.json();
    expect(res.code).toEqual(200);
  });
});
