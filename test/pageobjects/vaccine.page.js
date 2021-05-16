import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class vaccinepage extends Page {

    /**
     * define selectors using getter methods
     */

    get subscribeDropDown() {
        return $('//span[text()="SUBSCRIBE"]//following-sibling::span[1]')
    }
    get applePodcasts() {
        return $('//a[contains(text(),"APPLE PODCASTS")]')
    }
    get googlePodcasts() {
        return $('//a[contains(text(),"GOOGLE PODCASTS")]')
    }

    get parentButtonPlayOrPause() {
        return $('//button[@class="audiotrack__button audiotrack__button--play-pause button button--clean"]')
    }

    get audioPlayer() {
        return $('//div[@id="mod-audio-player_module-1"]')
    }

    get childButtonPlayOrPause() {
        return $('//div[@class="audio-player__loader loader loader--relative"]//following::button[@class="audio-player__button audio-player__button--play-pause button button--clean"]')
    }

    get audioPlaying() {
        return $('//div[@class="audio-player audio-player--global is-loaded is-media-tracked is-touched is-media-playing"]')
    }

    get audioPaused() {
        return $('//div[@class="audio-player audio-player--global is-loaded is-media-tracked is-touched is-media-paused"]')
    }

    get playerMuteOrUnmute() {
        return $('//span[@class="audio-player__icon audio-player__volume-icon"]')
    }

    get playerMuted() {
        return $('//div[@id="mod-audio-player_module-1"][contains(@class,"is-muted")]')
    }

    get stepForward() {
        return $('//span[@class="audio-player__icon icon icon--step-forward-20"]')
    }

    get timePlayed() {
        return $('//span[@class="audio-player__time audio-player__time--elapsed"]')
    }

    get languageToggle() {
        return $('//span[@class="icon--translation icon"]')
    }

    get languageList() {
        return $('//div[@class="dropdown__body"]')
    }


    /**
     *  methods to encapsule automation code to interact with the page
      to click on subscribe button and Verify Subscribe dropdown displays apple and google podcasts
     */

    verifySubscribeDropdown() {
        (this.subscribeDropDown).waitForDisplayed();
        (this.subscribeDropDown).click(); //open the dropdown
        expect(this.googlePodcasts).toBeDisplayed(); //verify googlePodCasts displayed
        expect(this.applePodcasts).toBeDisplayed(); //verify applePodCasts displayed
        (this.subscribeDropDown).click();//close the dropdown

    }

    /**
     Click Play on the audio icon and verify audio player is launched at the bottom of the screen
    */

    verifyAudioPlayerLaunched() {
        this.parentButtonPlayOrPause.waitForDisplayed();
        expect(this.parentButtonPlayOrPause).toBeDisplayed();
        (this.parentButtonPlayOrPause).click(); //Click on the play button
        this.audioPlayer.waitForDisplayed();
        expect(this.audioPlayer).toBeDisplayed(); //verify the player is displayed

    }

    /**
     Verfy audio player controls- puase, play, mute and unmute
    */

    verifyPlayerControlsInAudioPlayer() {

        //verify play and pause

        this.childButtonPlayOrPause.waitForDisplayed();
        expect(this.childButtonPlayOrPause).toBeDisplayed();
        (this.childButtonPlayOrPause).click(); //pause the audio player

        this.audioPaused.waitForDisplayed();
        expect(this.audioPaused).toBeDisplayed(); //verify the player is paused
        (this.childButtonPlayOrPause).click(); //Play the audio player

        this.audioPlaying.waitForDisplayed();
        expect(this.audioPlaying).toBeDisplayed(); //verify the player is not paused

        //verify mute and unmute

        (this.playerMuteOrUnmute).click(); //Mute audio player
        this.playerMuted.waitForDisplayed();
        expect(this.playerMuted).toBeDisplayed();//verify the player is muted

        (this.playerMuteOrUnmute).click(); //UnMute audio player
        browser.setTimeout({ 'implicit': 5000 })
        expect(this.playerMuted).not.toBeDisplayed(); //verify the player is not muted

    }

    /**
     Verfy fast forward and the time progressed
    */

    verifyFastForwardAndScrub() {
        //verify play and pause
        browser.setTimeout({ 'implicit': 20000 })
        this.timePlayed.waitForDisplayed();
        var beforeStepForward = (this.timePlayed).getText(); //capture the time played before the fast forward
        (this.stepForward).click(); //fast forwad 20 seconds
        this.timePlayed.waitForDisplayed();
        var afterStepForward = (this.timePlayed).getText();  //capture the time played after the fast forward
        var difference = parseFloat(afterStepForward.replace(":", ".")) - parseFloat(beforeStepForward.replace(":", "."));
        expect(difference).toBeGreaterThanOrEqual(0.2) //validating the time after the fast forward has increased by 20 seconds
    }

    /**
     Verfy the language toggle and lanuage list is displayed
    */

    verifylanguageToggle() {
        this.languageToggle.click();
        expect(this.languageList).toBeDisplayed(); //verify language list dropdown is dsplayed
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('cyprus-will-not-stop-the-use-of-the-astrazeneca-vaccine');
    }
}

export default new vaccinepage();
