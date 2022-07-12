import fetch from 'node-fetch';

import LoginPage from '../../pageobjects/Login/login.page';

import * as siteData from '../../data/site.data';

import { postBody } from '../../pageobjects/Api/api.lib';

postBody.id = siteData.FIVE;
postBody.name = siteData.CAT;
postBody.category.name = siteData.FELINE;
postBody.photoUrls[0] = siteData.CAT_LINK;
postBody.tags[0].name = siteData.TAG_NAME;
postBody.status = siteData.UNAVAILABLE;


describe('Swagger API Update Test.', () => {
  it(`PUT, create a Pet with the name: ${siteData.CAT} and ID: ${siteData.FIVE}`, async () => {
    const response = await fetch(siteData.BASE_URL, {
      method: 'PUT',
      body: JSON.stringify(postBody),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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
