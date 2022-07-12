import fetch from 'node-fetch';

import * as siteData from '../../data/site.data';
import { postBody } from '../../pageobjects/Api/api.lib';

postBody.id = siteData.THREE;
postBody.name = siteData.DOG;
postBody.status = siteData.UNAVAILABLE;

describe('Swagger API Delete Test.', () => {
  it(`PUT, create a Pet with the nam: ${siteData.DOG} and ID: ${siteData.THREE}`, async () => {
    const response = await fetch(siteData.BASE_URL, {
      method: 'PUT',
      body: JSON.stringify(postBody),
      headers: {'Content-Type': 'application/json'}
    })
    expect(response.ok)
  });

  it(`GET, verify the newly create Pet name is ${siteData.DOG}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.THREE}`, { method: 'GET'})
    const res = await response.json();
    expect(res.name).toEqual(siteData.DOG);
  });

  it(`DELETE, verify the Pet with id ${siteData.THREE} was deleted`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.THREE}`, { method: 'DELETE'})
    const res = await response.json();
    expect(res.type).toEqual(siteData.UNKNOWN);
  });
});
