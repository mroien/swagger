import fetch from 'node-fetch';

import * as siteData from '../../data/site.data';

import { postBody } from '../../pageobjects/Api/api.lib';

postBody.id = siteData.TWO;
postBody.name = siteData.CAT;

describe('Swagger API Create Test.', () => {
  it(`POST, create a Pet with the name: ${siteData.CAT} and ID: ${siteData.TWO}`, async () => {
    const response = await fetch(siteData.BASE_URL, {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {'Content-Type': 'application/json'}
    });
    const res = await response.json();
    console.log(res);
    expect(response.ok)
  });

  it(`GET, verify the newly create Pet name is ${siteData.CAT}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.TWO}`, { method: 'GET'})
    const res = await response.json();
    expect(res.name).toEqual(siteData.CAT);
  });
});
