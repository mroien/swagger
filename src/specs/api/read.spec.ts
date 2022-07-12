import fetch from 'node-fetch';

import * as siteData from '../../data/site.data';
import { postBody } from '../../pageobjects/Api/api.lib';

postBody.id = siteData.TWO;
postBody.name = siteData.CAT;

describe('Swagger API READ Test.', () => {
  it(`POST, create a Pet with the name: ${siteData.CAT} and ID: ${siteData.TWO}`, async () => {
    const response = await fetch(siteData.BASE_URL, {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {'Content-Type': 'application/json'}
    })
    expect(response.ok)
  });

  it(`GET, verify the newly create Pet name is ${siteData.CAT}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.TWO}`, { method: 'GET'})
    const res = await response.json();
    expect(res.name).toEqual(siteData.CAT);
  });

  it('GET, verify the staus of the Pet', async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.TWO}`, { method: 'GET'})
    const res = await response.json();
    expect(res.status).toEqual(siteData.UNAVAILABLE);
  });

  it(`GET, verify the category of the Pet is ${siteData.FELINE}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.TWO}`, { method: 'GET'})
    const res = await response.json();
    expect(res.category.name).toEqual(siteData.FELINE);
  });

  it(`GET, verify the Pet photoUrl is ${siteData.CAT_LINK}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.TWO}`, { method: 'GET'})
    const res = await response.json();
    expect(res.photoUrls[0]).toEqual(siteData.CAT_LINK);
  });

  it(`GET, verify the Pet Tag Name is ${siteData.TAG_NAME}`, async () => {
    const response = await fetch(`${siteData.BASE_URL}/${siteData.TWO}`, { method: 'GET'})
    const res = await response.json();
    expect(res.tags[0].name).toEqual(siteData.TAG_NAME);
  });
});
