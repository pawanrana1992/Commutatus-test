import React from "react";
import WithLanguage from "../../Components/HOC/WithLanguage";
import {Link} from "react-router-dom";

class IndexPage extends React.Component {

    render() {
        const {handleLanguage, changeLang, languages, activeLanguage} = this.props;
        return (
            <div className={'main'}>
                <div className="cover-image-gv">
                    <div className="banner-overlay global">
                        <div className="global-logo">
                            <img className="logo" src="https://cdn-expa.aiesec.org/assets/images/brand_icons/GV.png"
                                 alt="Global Volunteer Logo"/>
                        </div>
                    </div>
                </div>
                <div className="global-body gv-body">
                    <div
                        className="static-head-text text-center offwhite-bg"> {handleLanguage(`If we don't change the world, then who will?`)}
                        <div
                            className="content-text">{handleLanguage(`Global Volunteer is a cross-cultural experience for youth who want to gain personal development and leave an impact on the world.`)}</div>
                    </div>
                    <div className="main-info flex-container">
                        <div className="section-image-left">
                            <img className="img-responsive"
                                 src="https://cdn-expa.aiesec.org/assets/images/aiesec_org/static_images/gv_benefits_2x.jpg"
                                 alt="Benefits of Global Volunteer"/>
                        </div>
                        <div className="section-info-right">
                            <div className="info-container">
                                <div className="info-content">
                                    <div className="info-image">
                                        <img src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/gv-1_v2.svg"
                                             alt="Experience new cultures"/>
                                    </div>
                                    <div className="info-text">
                                        <p className="info-head">{handleLanguage(`Experience new cultures`)}</p>
                                        <p>{handleLanguage(`There's nothing quite like being in a brand new country, living and volunteering with people from all around. Imagine the things you'd learn!`)}</p>
                                    </div>
                                </div>
                                <div className="info-content">
                                    <div className="info-image">
                                        <img src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/gv-2.svg"
                                             alt="Make your Impact"/>
                                    </div>
                                    <div className="info-text">
                                        <p className="info-head">{handleLanguage(`Make your impact`)}</p>
                                        <p>{handleLanguage(`You can make a difference in the world, it starts with that first step. Contribute towards the Sustainable Development Goals and tackle the issues you're most passionate about.`)}</p>
                                    </div>
                                </div>
                                <div className="info-content">
                                    <div className="info-image">
                                        <img src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/gv-3.svg"
                                             alt="Challenge yourself"/>
                                    </div>
                                    <div className="info-text">
                                        <p className="info-head">{handleLanguage(`Push yourself out of your comfort zone`)}</p>
                                        <p>{handleLanguage(`If you don't try and experience new things, you'll never find your full potential. Challenge yourself, and discover the best version of you.`)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container space-out-section">
                        <div className="flex-parent-2">
                            <div className="flex-child-2">
                                <h1 className="headings-text-left">{handleLanguage(`Volunteer for the Global Goals`)}</h1>
                                <p className="content-text">
                                    <strong>{handleLanguage(`Why do we provide Global Volunteer experiences?`)}</strong>
                                </p>
                                <p className="content-text mb30">{handleLanguage(`Our Global Volunteer projects around the world exist because as AIESEC, we choose to shape what we do around what the world needs. We have committed to creating a youth movement to achieve the 17 Sustainable Development Goals by the year 2030.`)}<br/><br/>
                                    {handleLanguage('This all falls under our Youth 4 Global Goals initiative aimed at activating youth to achieve the Sustainable Development Goals.')}
                                </p>
                                <Link className="red-underline-btn text-center"
                                      to="#">{handleLanguage('Learn more')}</Link>
                            </div>
                            <div className="flex-child-2 text-center">
                                <img width="80%" src="https://cdn-expa.aiesec.org/assets/images/aiesec_org/y4gg.gif"
                                     alt="Youth 4 Global Goals"/>
                            </div>
                        </div>
                    </div>
                    <div className="offwhite-bg">
                        <div className="space-out-section hidden-md-down">
                            <div className="container video-card">
                                <div className="flex-parent-2">
                                    <div className="flex-child-2">
                                        <video width={550} preload="none" controls={true}>
                                            <source
                                                src="https://aiesec-bk.oss-cn-hangzhou.aliyuncs.com/Images/AIESEC%20Global%20Volunteer%20Introduction%20Video.mp4"
                                                type="video/mp4"/>
                                            {handleLanguage(`Browser not supported`)}
                                        </video>
                                    </div>
                                    <div className="flex-child-2">
                                        <div className="text-center">
                                            <img src="https://cdn-expa.aiesec.org/icons-v2/gv-logo.png"
                                                 alt="Global Volunteer Logo"/>
                                        </div>
                                        <p className="video-text">{handleLanguage(`When I got here and saw a different reality, it changed me more than I could change them.`)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container space-out-section">
                        <div className="flex-parent-2">
                            <div className="flex-child-2">
                                <div className="headings-text-left">{handleLanguage('What will you gain?')}</div>
                                <ul className="custom-ul-li">
                                    <li className="li-1">
                                        <div
                                            className="content-text">{handleLanguage(`Engage with all kinds of people towards achieving a purpose bigger than yourself. It's how you can empower others.`)}
                                        </div>
                                    </li>
                                    <li className="li-2">
                                        <div
                                            className="content-text">{handleLanguage(`Volunteering abroad isn't easy, but surpassing challenges is what makes it worth it. You learn how to be solution-oriented.`)}</div>
                                    </li>
                                    <li className="li-3">
                                        <div
                                            className="content-text">{handleLanguage(`Making your contribution and seeing your impact in real-time will show you that you can indeed make a difference the world. Become that world citizen that's needed more than ever.`)}</div>
                                    </li>
                                    <li className="li-4">
                                        <div
                                            className="content-text">{handleLanguage(`Going beyond what you know opens up new worlds for you. Find your values, explore your passions, and become more self-aware.`)}1W2w
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-child-2 text-center">
                                <div className="mission-img">
                                    <img src="https://cdn-expa.aiesec.org/assets/images/ldm/LDM_artboard.png"
                                         alt="Gain Benefits"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="count-up-counter ptb60 offwhite-bg">
                        <div className="container">
                            <div className="flex-parent-3">
                                <div className="flex-child-3 text-center">
                                    <img
                                        src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/world-gv-youth.svg"
                                        alt="Countries covered"/>
                                    <p>{handleLanguage('120+')}</p>
                                    <p>{handleLanguage('Countries covered')}</p>
                                </div>
                                <div className="flex-child-3 text-center">
                                    <img
                                        src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/members-gv-youth.svg"
                                        alt="Last year experiences"/>
                                    <p>50000+</p>
                                    <p>{handleLanguage('Last year experiences')}</p>
                                </div>
                                <div className="flex-child-3 text-center">
                                    <img
                                        src="https://cdn-expa.aiesec.org/assets/images/icons/op_icons/positions-gv-youth.svg"
                                        alt="Positions opened"/>
                                    <p>{handleLanguage('60000+')}</p>
                                    <p>{handleLanguage('Positions opened')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-out-section white-bg">
                        <div className="four-box-flow">
                            <h1 className="italics-heading">{handleLanguage('A life-changing experience a few clicks away')}</h1>
                            <div className="flex-parent-4">
                                <div className="flex-child-4 border-top-red">
                                    <h4 className="red-text">1. {handleLanguage('Sign up and connect')}</h4>
                                    <p>{handleLanguage('Build your profile on the AIESEC Opportunities Portal and we can start matching you with opportunities.')}</p>
                                </div>
                                <div className="flex-child-4 border-top-red">
                                    <h4 className="red-text">2. {handleLanguage('Search')}</h4>
                                    <p>{handleLanguage('Filter search results to find the perfect opportunity that fits your skills and interests.')}</p>
                                </div>
                                <div className="flex-child-4 border-top-red">
                                    <h4 className="red-text">3. {handleLanguage('Interview')}</h4>
                                    <p>{handleLanguage('Once we find a match, we can start the process of organizing interviews and putting things in place for your internship.')}</p>
                                </div>
                                <div className="flex-child-4 border-top-red">
                                    <h4 className="red-text">4. {handleLanguage('Confirm and Go')}</h4>
                                    <p>{handleLanguage('Congratulations! You’ll have made it through the interview. From here we’ll get you prepared for your new adventure.')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="white-bg">
                        <div className="flex-container long-info-section">
                            <div className="section-image-left">
                                <img className="img-responsive"
                                     src="https://cdn-expa.aiesec.org/assets/images/aiesec_org/static_images/gv_support_2x.jpg"
                                     alt="Our Support"/>
                            </div>
                            <div className="section-info-right">
                                <div className="info-container">
                                    <h1 className="italics-text">{handleLanguage('Feel at ease with our support')}</h1>
                                    <div className="info-content">
                                        <div className="info-image">
                                            <img src="https://cdn-expa.aiesec.org/icons/logistics.svg"
                                                 alt="logistics support"/>
                                        </div>
                                        <div className="info-text">
                                            <p className="info-head">{handleLanguage('Logistics Support')}</p>
                                            <p>{handleLanguage('We ensure you get the right visa, arrival pick-up information before your experience and departure instructions post-experience.')}</p>
                                        </div>
                                    </div>
                                    <div className="info-content">
                                        <div className="info-image">
                                            <img src="https://cdn-expa.aiesec.org/icons/description.svg"
                                                 alt="job description"/>
                                        </div>
                                        <div className="info-text">
                                            <p className="info-head">{handleLanguage('Clear job description')}</p>
                                            <p>{handleLanguage('We accompany you to the workplace on the first day, ensure your job description and goals are clear, and working hours/duration align to the initial description.')}</p>
                                        </div>
                                    </div>
                                    <div className="info-content">
                                        <div className="info-image">
                                            <img src="https://cdn-expa.aiesec.org/icons/shield.svg"
                                                 alt="Safe living conditions"/>
                                        </div>
                                        <div className="info-text">
                                            <p className="info-head">{handleLanguage('Safe living conditions')}</p>
                                            <p>{handleLanguage('Life and health insurance is mandatory for taking part in AIESEC. You will get information about accommodation and basic living costs')}.</p>
                                        </div>
                                    </div>
                                    <div className="info-content">
                                        <div className="info-image">
                                            <img src="https://cdn-expa.aiesec.org/icons/learning.svg"
                                                 alt="Learning experience"/>
                                        </div>
                                        <div className="info-text">
                                            <p className="info-head">{handleLanguage('Learning experience')}</p>
                                            <p>{handleLanguage('We set clear expectations, provide cultural preparation and facilitate learning spaces before and during experiences.')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="link-wrapper mtb60">
                                <Link className="red-underline-btn" to="#">{handleLanguage('View Opportunities')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer>
                    <div className="hidden-md-down">
                        <div className="container">
                            <div className="desc">
                                <h6>{handleLanguage('AIESEC')}</h6>
                                <p>{handleLanguage(`AIESEC is a non-governmental not-for-profit organisation in consultative status with the United Nations Economic and Social Council (ECOSOC), affiliated with the UN DPI, member of ICMYO, and is recognized by UNESCO. AIESEC International Inc. is registered as a Not-for-profit Organisation under the Canadian Not-for-profit Corporations Act - 2018-02-08, Corporation Number: 1055154-6 and Quebec Business Number (NEQ) 1173457178 in Montreal, Quebec, Canada.`)}</p>
                            </div>
                            <div className="about">
                                <h6>{handleLanguage('About')}</h6>
                                <Link to="/about-us"> {handleLanguage('About Us')} </Link>
                                <Link to="#"> {handleLanguage('Help')}</Link>
                                <Link to="#"> {handleLanguage('Blog')} </Link>
                                <Link to="#"> {handleLanguage('Press')} </Link>
                                <Link to="#">{handleLanguage('Annual Report')} </Link>
                            </div>
                            <div className="contact">
                                <h6> {handleLanguage('Youth')} </h6>
                                <Link to={'/'}>  {handleLanguage('Global Volunteer')} </Link>
                                <Link to={'/'}>    {handleLanguage('Global Talent')} </Link>
                                <Link to={'/'}>    {handleLanguage('Global Entrepreneur')} </Link>
                                <Link to={'/'}>    {handleLanguage('Youth 4 Global Goals')} </Link>
                                <Link to={'/'}>    {handleLanguage('YouthSpeak')} </Link>
                            </div>
                            <div className="partners">
                                <h6>  {handleLanguage('Organizations')} </h6>
                                <Link to="#">  {handleLanguage('Partner with us')} </Link>
                                <Link to="#">  {handleLanguage('Global Volunteer')} </Link>
                                <Link to="#">  {handleLanguage('Global Talent')} </Link>
                                <Link to="#">  {handleLanguage('Global Entrepreneur')} </Link>
                                <Link to="#">  {handleLanguage('Premium Organization')} </Link>
                            </div>
                            <div className="membership">
                                <h6>  {handleLanguage('Membership')} </h6>
                                <Link to={'/'}>   {handleLanguage('Join Us')} </Link>
                                <Link to={'/'}>   {handleLanguage('Find your country!')} </Link>
                                <Link to="#">  {handleLanguage('Alumni')} </Link>
                            </div>
                        </div>
                        <div className="container">
        <span>
           {handleLanguage('© AIESEC 2018')}
        </span>
                            <span>
          <Link to="#"> {handleLanguage('Terms & Privacy')}</Link>
        </span>
                            <span>
          <Link to="#"> {handleLanguage('Cookies Policy')} </Link>
        </span>
                            <span/>
                            <span className="social-footer">
          <Link to="#"><i className="cm cm-facebook"/></Link>
          <Link to="#"><i className="cm cm-instagram"/></Link>
          <Link to="#"><i className="cm cm-twitter"/></Link>
          <Link to="#"><i className="cm cm-linkedin"/></Link>
          <Link to="#"><i className="cm cm-youtube"/></Link>
        </span>
                            <span>
          <div className="select-box-custom">
            <select className="custom-footer-select dropup" name="lang" id="" value={activeLanguage} onChange={(e) => changeLang(e)}>
                        {languages.map((ob, i) => (
                            <option value={ob[0]} key={i}>{ob[0]}</option>
                        ))}
                    </select>
          </div>
        </span>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}

export default WithLanguage(IndexPage);