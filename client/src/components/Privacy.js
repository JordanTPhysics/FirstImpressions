import React, { useState } from 'react';

import '../App.css';


const PrivacyPolicy = () => {

    const [tab, setTab] = useState('privacy');

    const handleTab = (tab) => {
        setTab(tab);
    }

    const domain = 'First Impressions';

    return (
        <div className='container m-0'>

            <div className='user-box' style={{ "display": "block" }}>
                <div className='row'>
                    <div className='col-md-6'>
                        <button className='App-btn' onClick={() => handleTab('privacy')}>Privacy</button>

                    </div>
                    <div className='col-md-6'>
                        <button className='App-btn' onClick={() => handleTab('terms')}>Terms</button>

                    </div>
                </div>
                <div className='row'>
                    {tab === 'terms' ? (<div> <h3>Terms and Conditions</h3>
                        <p>
                            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use <a href="https://myfirstimpress.com/">{domain}</a> if you do not accept all of the terms and conditions stated on this page.
                        </p>

                        <h3>License</h3>
                        <p>
                            Unless otherwise stated, FirstImpression and/or its licensors own the intellectual property rights for all material on {domain}. All intellectual property rights are reserved. You may view and/or print pages from {domain} for your own personal use subject to restrictions set in these terms and conditions.
                        </p>

                        <h3>Restrictions</h3>
                        <p>
                            You must not:
                            <ul>
                                <li>Republish material from {domain}</li>
                                <li>Sell, rent, or sub-license material from {domain}</li>
                                <li>Reproduce, duplicate, or copy material from {domain}</li>
                            </ul>
                        </p>

                        <h3>Content</h3>
                        <p>
                            Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post on or through {domain}, including its legality, reliability, and appropriateness.
                        </p>

                        <h3>Links To Other Web Sites</h3>
                        <p>
                            Our Service may contain links to third-party websites or services that are not owned or controlled by FirstImpression. FirstImpression has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that FirstImpression shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites or services.
                        </p> </div>) :
                        (<div> <h1>Privacy Policy</h1>

                            <h3>Your privacy is important to us.</h3>
                            <p>It is FirstImpression's policy to respect your privacy regarding any information we may collect from you across our website, {domain}, and other sites we own and operate.</p>

                            <h3>Information We Collect</h3>
                            <p>We only collect information about you if we have a reason to do so. For example, to provide our services, to communicate with you, or to make our services better.</p>

                            <h3>Information You Provide to Us</h3>
                            <p>We collect information that you provide directly to us. For example, when you subscribe to our services, we may collect your name, email address, and other contact details.</p>

                            <h3>How We Use Information</h3>
                            <p>We may use the information we collect for various purposes, including to:</p>
                            <ul >
                                <li>Provide, maintain, and improve our services.</li>
                                <li>Communicate with you about our services.</li>
                                <li>Personalize and improve your experience.</li>
                                <li>Respond to your inquiries and provide support.</li>
                            </ul>

                            <h3>Data Security</h3>
                            <p>We take reasonable measures to protect the information we collect from unauthorized access, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure and we cannot guarantee absolute security.</p>

                            <h3>Third-Party Services</h3>
                            <p>We may use third-party services that collect, monitor, and analyze information to help us improve our services.</p>

                            <h3>Cookies</h3>
                            <p>We may use cookies and similar tracking technologies to track the activity on our website and hold certain information.</p>

                            <h3>Changes to This Privacy Policy</h3>
                            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                            <h3>Contact Us</h3>
                            <p>If you have any questions or concerns about our Privacy Policy, please contact us at info@firstimpress.io</p>
                            <p>This Privacy Policy was last updated on 02/04/2024.</p>
                        </div>)

                    }</div>
            </div>
        </div>
    );
};



export default PrivacyPolicy;