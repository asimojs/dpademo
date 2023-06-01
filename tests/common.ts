import { Page, expect } from "@playwright/test";

export function testURL(page?: string) {
    let CI = !!process.env.CI;
    const server = CI ? "https://asimojs.github.io/dpademo" : "http://127.0.0.1:3000";
    return `${server}/${page || ""}`;
}

export async function testResultsPanel(page: Page) {
    const resultsPanel = page.getByTestId("Preact%SearchResultsPanel");
    await resultsPanel.waitFor();

    // check that the first accordion has 4 sections
    const accordions = page.getByTestId("Preact%Accordion");
    expect(await accordions.count()).toBe(3);

    const accordion1 = accordions.filter({ hasText: "People also ask" });
    expect(await accordion1.count()).toBe(1);
    let sections1 = await accordion1.locator(".sections > .section").all();
    expect(sections1.length).toBe(4); // 4 sections
    await expect(sections1[0].getByText("Homer has a low IQ")).toBeHidden();  // first section is collapsed

    // expand the first section
    await sections1[0].click();
    await expect(sections1[0].getByText("Homer has a low IQ")).toBeVisible();  // first section is expanded

    // new sections should have been added
    const lastSection = accordion1.getByText("What was Homer Simpson known for?");
    await lastSection.waitFor();
    sections1 = await accordion1.locator(".sections > .section").all();
    expect(sections1.length).toBe(6); // more sections received -> 6 sections now
    await expect(sections1[0].getByText("Homer has a low IQ")).toBeVisible();  // first section is still expanded

    // click on the first image list to trigger the popover dialog

    const imgList1 = (await page.getByTestId("Preact%ImgList").all())[0];
    const images = (await imgList1.locator("img").all());
    expect(images.length).toBe(5);

    const dialogs = page.getByTestId("Preact%Dialog");
    let dialog1 = (await dialogs.all())[0];
    expect(dialog1).toBeUndefined();

    // trigger the request
    await images[0].click();
    await dialogs.waitFor();

    dialog1 = (await dialogs.all())[0];
    await expect(dialog1).toBeVisible();
    await expect(dialog1.getByText("Les Simpson : Homer va-t-il mourir dans la nouvelle saison")).toBeVisible();

    await expect(sections1[0].getByText("Homer has a low IQ")).toBeVisible();  // first section is still expanded
    sections1 = await accordion1.locator(".sections > .section").all();
    expect(sections1.length).toBe(6); // still 6 sections

    // close the dialog
    const closeBtn = dialog1.locator(".close-btn");
    await closeBtn.click();
    await expect(dialog1).not.toBeVisible();

    await expect(sections1[0].getByText("Homer has a low IQ")).toBeVisible();  // first section is still expanded
}
