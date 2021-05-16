import vaccineAudioPage from '../pageobjects/vaccine.page';

describe('Verify the SBS audio player', () => {


  it('Page should load and title should be displayed', () => {
    vaccineAudioPage.open();
    browser.setTimeout({ 'implicit': 20000 });
    expect(browser).toHaveTitle('SBS Language | Δεν αποσύρει το εμβόλιο της AstraZeneca η Κύπρος', { containing: true })
  });


  it('Verify Subscribe dropdown displays apple and google podcasts', () => {
    browser.setTimeout({ 'implicit': 20000 });
    vaccineAudioPage.verifySubscribeDropdown();
  });


  it('verify audio player is launched at the bottom of the screen', () => {
    browser.setTimeout({ 'implicit': 5000 });
    vaccineAudioPage.verifyAudioPlayerLaunched();
  });


  it('Click and verify player controls – Play and pause, mute and unmute', () => {
    browser.setTimeout({ 'implicit': 5000 });
    vaccineAudioPage.verifyPlayerControlsInAudioPlayer();
  });

  it('Click 20s forward or rewind on the audio player and verify scrub on the progress bar', () => {
    browser.setTimeout({ 'implicit': 5000 });
    vaccineAudioPage.verifyFastForwardAndScrub();
  });

  it('Verify clicking on language toggle (top right corner of the page) displays language list', () => {
    browser.setTimeout({ 'implicit': 5000 });
    vaccineAudioPage.verifylanguageToggle();
  });

});


