import fetch from 'node-fetch';

import * as siteData from '../../data/site.data';
import { postBody } from '../../pageobjects/Api/api.lib';

postBody.id = siteData.ONE;
postBody.name = siteData.DOG;
postBody.status = siteData.UNAVAILABLE;

describe('Swagger API Delete Test.', () => {
  it(`POST, create a Pet with the nam: ${siteData.DOG} and ID: ${siteData.ONE}`, async () => {
    const response = await fetch(siteData.BASE_URL, {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {'Content-Type': 'application/json'}
    })
    expect(response.ok)
  });

  it(`GET, verify the newly create Pet name is ${siteData.DOG}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.ONE}`, { method: 'GET'})
    const res = await response.json();
    expect(res.name).toEqual(siteData.DOG);
  });

  it(`DELETE, verify the Pet with id ${siteData.ONE} was deleted`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.ONE}`, { method: 'DELETE'})
    const res = await response.json();
    expect(res.type).toEqual(siteData.UNKNOWN);
  });
});
