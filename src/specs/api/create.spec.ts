import fetch from 'node-fetch';

import * as siteData from '../../data/site.data';

import { postBody } from '../../pageobjects/Api/api.lib';

postBody.id = siteData.ONE;
postBody.name = siteData.CAT;

describe('Swagger API Create Test.', () => {
  it(`PUT, create a Pet with the name: ${siteData.CAT} and ID: ${siteData.ONE}`, async () => {
    const response = await fetch(siteData.BASE_URL, {
      method: 'PUT',
      body: JSON.stringify(postBody),
      headers: {'Content-Type': 'application/json'}
    });
    const res = await response.json();
    expect(response.ok)
  });

  it(`GET, verify the newly create Pet name is ${siteData.CAT}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.ONE}`, { method: 'GET'})
    const res = await response.json();
    expect(res.name).toEqual(siteData.CAT);
  });
});
