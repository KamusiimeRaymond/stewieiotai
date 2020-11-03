import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import newspaper from './images/newspaper.png';
import aiimg from './images/aiimg.png';
import security from './images/security.png';
import progress from './images/progress.png';
import iotnewsweek from './images/iotnewsweek.jpg';
import iottechnews from './images/iottechnews.png';
import iotnow from './images/IoT-Now-logo.svg';
import iotbusiness from './images/iotbusiness.jpg';
import './chatbot.css';

const theme = {
    background: "#fff",
    headerBgColor: 'rgb(29, 50, 109)',
    headerFontColor: '#fff',
    headerFontSize: '18px',
    botBubbleColor: 'rgb(48, 7, 65)',
    botFontColor: '#fff',
    userBubbleColor: 'rgb(241, 241, 241)',
    userFontColor: '#000',
};

const steps=[
    {
        id: '0',
        component: (
        <div>    
            <span className="emojis" role="img" aria-label="smile">&#128512;</span><br/>
            <span className="emojis" role="img" aria-label="smile">&#128080;</span>
        </div>
        ),
        trigger: '1',
    },
    {
        id: '1',
        message: 'Hey there, my name is Stewie, an Ai Bot and your IoT assistant.',
        trigger: '2',
    },
    {
        id: '2',
        message: 'How may I help you today?',
        trigger: '3',
    },
    {
        id: '3',
        message: 'Here are a couple of options I can help you with.',
        trigger: 'mainmenu',
    },
    {
        id: 'mainmenu',
        options: [
            {value: 1, label: 'IoT News', trigger: 'iotnews'},
            {value: 2, label: 'Safeguard my device', trigger: 'safeguarddeviceimg'},
            {value: 3, label: 'Device malfunctioning', trigger: 'devicemalfunction'},
            {value: 5, label: 'Know more about Stewie', trigger: 'aiimg'},
            {value: 6, label: 'Leave', trigger: 'leave'},
        ],
    },

    /*-------------------------------------------------------------------------------------------------*/
    
    //---IoT news section--//
    {
        id:'iotnews',
        message: 'Here are a couple of insights for you. Feel free to check them out',
        trigger: 'insightsemoji',
    },
    {
        id:'insightsemoji',
        component: (
            <div>
                <img src={newspaper} width="250px" alt='newspaper'/>
            </div>
        ),
        trigger:'urloptions'
    },
    //---url options---//
    {
        id:'urloptions',
        options: [
            {value: 1, label: 'IoT News of the week', trigger: 'IoTurl-1'},
            {value: 2, label: 'IoT Tech News', trigger: 'IoTurl-2'},
            {value: 3, label: 'IoT Now', trigger: 'IoTurl-3'},
            {value: 4, label: 'IoT Business News', trigger: 'IoTurl-4'},
            {value: 5, label: 'Back to main menu', trigger: 'backtomainmenu'},
        ],
    },
    
    //---Triggers for urls---//
    {
        id:'IoTurl-1',
        message: 'Loading content for you...',
        trigger: 'url-1',
    },
    {
        id:'url-1',
        component: (
            <div>
                <img src={iotnewsweek} width="250px" alt='iot news week'/>
                <h2>IoT News of the week</h2>
                <a href="https://staceyoniot.com/category/news/">Click here to get all the news for the week</a>
            </div>
        ),
        trigger: 'urlhelpful'
    },
    {
        id:'IoTurl-2',
        message: 'Loading content for you...',
        trigger: 'url-2',
    },
    {
        id:'url-2',
        component: (
            <div>
                <img src={iottechnews} width="250px" alt='iot tech news'/>
                <h2>IoT Tech News</h2>
                <a href="https://iottechnews.com/">Click here to get all the IOT Tech news</a>
            </div>
        ),
        trigger: 'urlhelpful'
    },
    {
        id:'IoTurl-3',
        message: 'Loading content for you...',
        trigger: 'url-3',
    },
    {
        id:'url-3',
        component: (
            <div>
                <h2>IoT Now</h2>
                <div>
                    <img src={iotnow} width="250px" alt='iot now'/>
                    <h2>IoT Now</h2>
                    <a href="https://iot-now.com/">Click here to get all IOT NOW news</a>
                </div>
            </div>
        ),
        trigger: 'urlhelpful'
    },
    {
        id:'IoTurl-4',
        message: 'Loading content for you...',
        trigger: 'url-4',
    },
    {
        id:'url-4',
        component: (
            <div>
                <h2>IoT Business News</h2>
                <div>
                    <img src={iotbusiness} width="250px" alt='iot bbussiness'/>
                    <h2>IoT Business News</h2>
                    <a href="https://iotbusinessnews.com/">Click here to get all the IOT Business news</a>
                </div>
            </div>
        ),
        trigger: 'urlhelpful'
    },

    //---Was this url helpful?---//
    {
        id:'urlhelpful',
        message: 'Was this helpful?',
        trigger: 'IoTyesorno',
    },
    {
        id:'IoTyesorno',
        options: [
            {value: 1, label: 'Yes', trigger: 'anythingelse'},
            {value: 2, label: 'No', trigger: 'loadnewsagain'},
        ],
    },

    /*-------------------------------------------------------------------------------------------------*/
    
    //----Device malfunction----//
    {
        id:'devicemalfunction',
        message:'Your device must be on a home, office, or personal device connection',
        trigger:'takestepsimg',
    },
    {
        id:'takestepsimg',
        component: (
            <div>
                <img src={progress} width="250px" alt='newspaper'/>
            </div>
        ),
        trigger:'takesteps',
    },
    {
        id:'takesteps',
        message:'I will take you through a couple of steps to help us find out what could be wrong.',
        trigger:'acceptsteps',
    },
    {
        id:'acceptsteps',
        options: [
            {value: 1, label:'Okay', trigger:'checkconnection'},
            {value: 2, label:'No I figured it out', trigger:'anythingelse'},
        ],
    },
    {
        id:'checkconnection',
        message:'Please check all your cable connections for your device. Making sure the cables are also correctly placed in the device.',
        trigger:'checkconnectionoptions',
    },
    {
        id:'checkconnectionoptions',
        options: [
            {value:1, label:'Connection is okay', trigger:'internetconnection'},
            {value:2, label:'Figured it out, its working now', trigger:'anythingelse'},
        ],
    },
    {
        id:'internetconnection',
        message:'Please now check your internet connection. You should be connected for the device(s) to work.',
        trigger:'internetconnectionoptions',
    },
    {
        id:'internetconnectionoptions',
        options: [
            {value:1, label:'Yes, I am connected', trigger:'checkhardware'},
            {value:2, label:'Figured it out', trigger:'anythingelse'},
        ],
    },
    {
        id:'checkhardware',
        message: 'Your device could be facing a hardware problem or malfunction.',
        trigger:'possibleissues',
    },
    {
        id:'possibleissues',
        component: (
            <ul>
                <li>Short circuit</li>
                <li>Power cable may not be connected</li>
                <li>Your connection may have an internal problem</li>
            </ul>
        ),
        trigger:'confirmpossibleissues',
    },
    
    //MAKE AN ID FOR ATTACKS AND CONNECT HERE---------------------------
    {
        id:'confirmpossibleissues',
        options: [
            {value:1,label:'Yes, I can see the issue',trigger:'confirmedissue'},
            {value:1,label:'There is nothing wrong',trigger:''},
        ],
    },
    {
        id:'confirmedissue',
        message:'Please fix the cables or replace them for the device to work properly or you can contact a technician',
        trigger:'confirmfixissue',
    },
    {
        id:'confirmfixissue',
        options: [
            {value:1, label:'Alright, I will.', trigger:'anythingelse'},
            {value:2, label:'Contact Technician', trigger:'contacttechnician'},
        ],
    },
    {
        id:'contacttechnician',
        message:'Here are some technicians I was able to reach.',
        trigger:'availabletechnicians',
    },
    {
        id:'availabletechnicians',
        component: (
            <div>
                <h2>Here are a couple of places that have technicians that will assist in the handling of IoT Devices</h2>
                <h3>Samsung Customer Service</h3>
                <p>Metropole House, Entebbe Road</p>
                <p>Phone: 0800 300300</p>
                <br/>
                <h3>LG Appliance World</h3>
                <p>Plot 115, Spring Rd, Kampala</p>
                <p>Phone: 0414 340799</p>
                <br/>
                <h3>PUREFLEX SYSTEM</h3>
                <p>This is an IoT Copany in Uganda that helps ensure that your IoT devies are well kept. You can contact them here using their email and phone contact</p>
                <p>Email: sales@preflexsystems.com</p>
                <p>Phone: 0414693011 / 0312531673</p>

            </div>
        ),
        trigger:'waslistoftechnicianshelpful',
    },
    {
        id:'waslistoftechnicianshelpful',
        message:'Was this helpful?',
        trigger:'waslistoftechnicianshelpfuloptions',
    },
    {
        id:'waslistoftechnicianshelpfuloptions',
        options: [
            {value:1,label:'Yes it was',trigger:'anythingelse'},
            {value:2,label:'I am not satisfied',trigger:'lastresort'},
        ],
    },
    {
        id:'lastresort',
        message: 'I may have to help you connect to a manufacturer',
        trigger: 'contactmanufacturer',
    },
    {
        id: 'contactmanufacturer',
        message:'Here is a list of available manufacturers.',
        trigger:'listofmanufacturers',
    },
    {
        id:'listofmanufacturers',
        component: (
            <div>
                <h2>List of manufacturer</h2>
                <h3>Samsung</h3>
                <h3>LG</h3>
                <h3>Cisco</h3>
                <h3>Vates</h3>
                <h3>ScienceSoft (USA and Europe)</h3>
                <h3>PTC, Boston</h3>
                <h3>ARM IoT Security</h3>
            </div>
        ),
        trigger:'waslistofmanufacturershelpful',
    },
    {
        id:'waslistofmanufacturershelpful',
        options: [
            {value:1,label:'Yes it was',trigger:'anythingelse'},
            {value:2,label:'Not satisfied',trigger:'notsatified'},
        ],
    },
    {
        id:'notsatified',
        message:'I am so sorry but there is not much I can do for you now...',
        trigger:'backtomainmenu',
    },

    /*-------------------------------------------------------------------------------------------------*/
    
    //---Safe guard device ---//
    {
        id:'safeguarddeviceimg',
        component:(
            <div>
                <img src={security} width="250px" alt="security"/>
            </div>
        ),
        trigger:'safeguarddevice',
    },
    {
        id:'safeguarddevice',
        message:'Here are some safety aspects for you to look into',
        trigger:'safetyaspectsoptions',
    },
    {
        id:'safetyaspectsoptions',
        options: [
            {value:1,label:'Handling devices',trigger:'handlingdevices'},
            {value:2,label:'Storage space within device',trigger:'storagespace'},
            {value:3,label:'Attacks on IoT',trigger:'attacksoniot'},
            {value:4, label: 'Back to main menu', trigger: 'backtomainmenu'},
        ],
    },
    
    //Handling device
    {
        id:'handlingdevices',
        message:'Here are some handling aspects for you to look into',
        trigger:'handlingdeviceslist',
    },
    {
        id:'handlingdeviceslist',
        component: (
            <div>
                <h2>List of handling tips</h2>
                <h3>Avoid water from getting near the device</h3>
                <p>Water may help in the conducting of electricity further if there is an open or live connection. 
                Avoid water getting any the device.</p>
                <h3>Dont use damaged equipment</h3>
                <p>Once an IoT device has been damaged, do not continue to use it as it can become a very big threat
                to the people around you.</p>
                <h3>Turn off power once not in use</h3>
                <p>Avoid leaving the power on at anny one time you have completed using the device. Some devices have
                can turn themselves off.</p>
                <h3>Insulate devices while working</h3>
                <p>Avoid sitting near electrical conducting surfaces like a cold floor or metallic chairs or benches. 
                In doing this, you avoid being shocked by the current running through the device.</p>
                <h3>Use insulated rubber gloves when fixing a device</h3>
                <p>Use insulated material when working on an IOT devices. This also help to avoid electrical shock</p>
                <h3>Do not assume you kow</h3>
                <p>It is okay to "noo know something" and seek for the understanding of it from a master at it. Contact
                a specialist at IoT devices for the fixing of any issues.
                </p>
            </div>
        ),
        trigger:'waslisthandlingdeviceslisthelpful',
    },
    {
        id:'waslisthandlingdeviceslisthelpful',
        message:'Was this helpful?',
        trigger:'waslisthandlingdeviceslisthelpfuloptions',
    },
    {
        id:'waslisthandlingdeviceslisthelpfuloptions',
        options: [
            {value:1,label:'Yes',trigger:'anythingelse'},
            {value:2,label:'Know more',trigger:'storagespace'},
        ],
    },
    
    //----Storage----//
    {
        id:'storagespace',
        message:'Here are some storage aspects for you to look into',
        trigger:'storagespacelist',
    },
    {
        id:'storagespacelist',
        component: (
            <div>
                <p>Some devices malfunction because of the space accorded to them in the actual device. The more
                theh space,  the more the space, the better the functionality. 
        </p>
            </div>
        ),
        trigger:'wasstoragespacelisthelpful',
    },
    {
        id:'wasstoragespacelisthelpful',
        message:'Was this helpful?',
        trigger:'wasstoragespacelisthelpfuloptions',
    },
    {
        id:'wasstoragespacelisthelpfuloptions',
        options: [
            {value:1,label:'Yes',trigger:'anythingelse'},
            {value:2,label:'Know more',trigger:'attacksoniot'},
        ],
    },
    
    //----Attacks on IoT-----//
    {
        id:'attacksoniot',
        message:'Here are some safety aspects for you to look into',
        trigger:'attacksoniotoptions',
    },
    {
        id:'attacksoniotoptions',
        options: [
            {value:1,label:'Viruses and malware',trigger:'virusesandmalwarelist'},
            {value:2,label:'Hacking',trigger:'hackingattackslist'},
        ],
    },
    
    //Viruses and Malware
    {
        id:'virusesandmalwarelist',
        component: (
            <div>
                <h2>Viruses and malware</h2>
                <p>The term "malware" — an amalgamation of malicious and software — is now used to describe any 
                malicious computer program on a computer or mobile device.</p>
                <h3>1. Computer Viruses</h3>
                <p>What is a computer virus? Computer viruses are a type of malware that earned their name because 
                of how they spread by "infecting" other files on a disk or computer. Viruses then spread to other 
                disk drives and machines when the infected files are received in downloads from websites, email 
                attachments, shared drives or when carried in files on physical media, such as USB drives or—in the 
                early days—floppy disks.</p>
                <h3>2. Worms</h3>
                <p>Unlike viruses, worms don't require human help in order to infect, self-replicate or propagate. 
                As soon as they breach a system, they infect their entry point and spread through the device and 
                across any network to which the device connects</p>
                <h3>3. Adware</h3>
                <p>One of the most common online nuisances is adware. Adware programs automatically deliver 
                advertisements to host computers. Familiar examples of adware include pop-up ads on webpages and 
                advertising messages that are part of the interface of "free" software. While some 
                adware is relatively harmless, other variants use tracking tools to glean information about your 
                location or browser history</p>
                <h3>4. Spyware</h3>
                <p>Spyware does just what it says. It spies on what you're doing at your computer. It collects 
                data such as keystrokes, browsing habits, location data and even login information. While adware 
                might include "repurposing" collected data for sale in the terms of service statement, spyware is 
                more duplicitous.</p>
            </div>
        ),
        trigger:'wasattacksoniotlisthelpful',
    },
    
    //Hacking
    {
        id:'hackingattackslist',
        component: (
            <div>
                <h2>Hacking as an attack</h2>
                <p>Hackers use of ignorant users by taking advantage of them to steal their persnaol information. 
                Hackers may steal passwords and hange account credentials so that orginal users are unavle to access 
                their data. A hacker can also  use the opportunity of changing data that belongs to a user.</p>
            </div>
        ),
        trigger:'wasattacksoniotlisthelpful',
    },
    
    //Was it useful?
    {
        id:'wasattacksoniotlisthelpful',
        message:'Was this helpful?',
        trigger:'wasattacksoniotlisthelpfuloptions',
    },
    {
        id:'wasattacksoniotlisthelpfuloptions',
        options: [
            {value:1,label:'Yes',trigger:'anythingelse'},
            {value:2,label:'Know more',trigger:'backtomainmenu'},
        ],
    },
    
    /*-------------------------------------------------------------------------------------------------*/
    
    //---Know more about me---//
    {
        id:'aiimg',
        component: (
            <div>
                <img src={aiimg} width="250px" alt="aiimage"/>
            </div>
        ),
        trigger:'aboutstewieai',
    },
    {
        id:'aboutstewieai',
        message:'I am an AI created to help IoT users in their day-to-day usage of IoT technology. The technology field is increasingly growing by the day, as a result, devices will be manufactured at a very fast rate. I am here to help users take care of their devices and to help them solve their device problems. You can visit this site to know more about me.',
        trigger:'website',
    },
    {
        id:'website',
        component: (
            <div>
                <h2>More about Stewie</h2>
                <p>I was created to help IoT users in Kampala as a group 
                project with the aim of helping Ugandans and the rest of the world 
                to be able to safeguard their devices from</p>
            </div>
        ),
        trigger:'anythingelse',
    },
    
    //---Is there anything else?---//
    {
        id:'anythingelse',
        message:'Is there anything else I can help you with?',
        trigger:'anythingelseoptions',
    },
    {
        id:'anythingelseoptions',
        options: [
            {value:1, label:'Yes', trigger:'backtomainmenu'},
            {value:2, label:'No', trigger:'leave'},
        ],
    },
    
    //---Back to main menu options---//
    {
        id: 'backtomainmenu',
        message: 'Let us get back to the main menu.',
        trigger: 'mainmenu',
    },
    {
        id: 'loadnewsagain',
        message: 'Lets look at some more insights.',
        trigger: 'urloptions',
    },

    //---Refresh to restart the conversation---//
    {
        id: 'leave',
        message: 'Thanks for checking. Refresh to restart the conversation',
        end: true,
    },
];

class Chatlist extends Component {
  render(){
  return (
    <ThemeProvider theme={theme}>  
      <ChatBot 
      headerTitle='Stewie'
      hideHeader='true' 
      steps={steps}
      speechSynthesis={{ enable: true, lang: 'en' }}
      />
    </ThemeProvider>
  )
  }
}

export default Chatlist;