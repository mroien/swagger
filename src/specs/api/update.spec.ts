import fetch from 'node-fetch';

import LoginPage from '../../pageobjects/Login/login.page';

import * as siteData from '../../data/site.data';

import { postBody, updateName } from '../../pageobjects/Api/api.lib';

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
    })
    expect(response.ok)
  });

  it(`GET, verify the newly create Pet name is ${siteData.CAT}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.FIVE}`, { method: 'GET'})
    const res = await response.json();
    console.log(res);
    expect(res.name).toEqual(siteData.CAT);
  });

  it(`PUT, verify the Pet name has changed to ${siteData.BOB}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.FIVE}`, { 
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Bob' }),
    });
    // FIXME: The response is returning.
    // url: 'https://petstore.swagger.io/v2/pet/5',
    // status: 405,
    // statusText: 'Method Not Allowed',
    // console.log(response);

    const res = await response.json();
    expect(res.name).toEqual(siteData.BOB);
  });
});
