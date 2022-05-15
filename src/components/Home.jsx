import Styles from './Home.module.css'
import Earth from '../assets/earth.jpg'
import Logo from '../assets/logo.png'
import Thermo from '../assets/thermo.png'
import Linkedin from '../assets/linkedin.jfif'
import Email from '../assets/email.png'
import Github from '../assets/github.png'
import { useState } from 'react'

const Home = () => {

    const [Clicked, setClicked] = useState(false)

    const PledgeHandler = () => {
        setClicked(true);
    }

    return (
        <>
            <div className={Styles.Container}>
                <div className={Styles.TopContainer}>
                    <div className={Styles.LogoContainer}>
                        <img src={Logo} alt="Logo" className={Styles.Logo} />
                    </div>
                    <div className={Styles.Heading}>
                        <h1>Global warming, History's greatest Genocide</h1>
                    </div>
                    <img src={Earth} alt="Earth" className={Styles.BackgroundEarth} />
                    
                </div>
                <div className={Styles.MiddleContainer}>
                    <div className={Styles.Head}>
                        <h1>Global warming, a Global warning.</h1>
                    </div>
                    <div className={Styles.Content}>
                        <h2>What Global Warming really is?</h2>
                        <div className={Styles.Definition}>
                            <div className={Styles.Video}>
                                <iframe src="https://giphy.com/embed/ZBtOMat6TCulEzJ7cU" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                            </div>
                            <div className={Styles.Description}>
                                <div className={Styles.Left}>
                                <p>Contemporary climate change includes both <i><b>Global Warming</b> </i>and its impacts on Earth's weather patterns. There have been previous periods of climate change, but the current changes are distinctly more rapid and not due to natural causes. Instead, they are caused by the<i><b> emission of greenhouse gases, mostly carbon dioxide (CO2) and methane.</b></i> </p>
                                <br />
                                <p>A gradual increase in the overall temperature of the earth's atmosphere generally attributed to the greenhouse effect caused by increased levels of carbon dioxide, CFCs, and other pollutants.</p>
                                </div>
                                
                                <img src={Thermo} className={Styles.Meter} alt="High Temperature" />
                            </div>
                        </div>
                        <div className={Styles.NasaLink}>
                            <a href="https://climate.nasa.gov/">For more Information, Click Here!</a>
                        </div>
                    </div>

                </div>
                <div className={Styles.BottomContainer} >
                    <h1>Join hands to stop Global Warming!</h1>
                    <h2>Make a pledge</h2>
                    <div className={Styles.Children}>
                        <div className={Styles.PledgeButton}>
                            <h3>Join hands to stop global warming!</h3>
                            <button onClick={PledgeHandler} className={Clicked ? Styles.Active : Styles.Button}>i Plegde</button>
                            <h1 className={Clicked ? Styles.Showtext : Styles.HiddenText}>Thankyou for joining the cool revolution</h1>
                        </div>
                        <div className={Styles.RightText} >
                            <h2>Ways to prevent global warming: </h2>
                            <ul>
                                <li>Plant trees</li>
                                <li>Recycle, don't burn</li>
                                <li>Save energy - Save money</li>
                                <li>Raise your voice to stop global warming</li>
                                <li>Say no to pollution - Say no to global warming</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Styles.Footer}>
                    <div className={Styles.About}>
                        <h3>ABout the Developer</h3>
                        <a href="https://www.linkedin.com/in/aryan-garg/"><img src={Linkedin} alt="Linkedin" className={Styles.Icon}/></a>
                        <a href="https://github.com/AryanGarg02"><img src={Github} alt="Github" className={Styles.Icon}/></a>
                        <a href="mailto:garg.aryan029@gmail.com"><img src={Email} alt="Email" className={Styles.Icon}/></a>
                    </div>
                    <div className={Styles.LogoBottom}>
                        <img src={Logo} alt="Go Green" className={Styles.Logo}/>
                        <h1>Go Green - Go Clean</h1>
                    </div>
                </div>
                
            </div>
        </>
    );

}

export default Home;