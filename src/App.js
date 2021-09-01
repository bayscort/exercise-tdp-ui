import styled from 'styled-components';
import imageBanner from './assets/logo512.png'

const App = () => {
    const Media1 = styled.img`
    width: 100%;
    min-width: 270px;
    max-width: 270px;
    `
    const Media2 = styled.img`
    width: 100%;
    min-width: 370px;
    max-width: 370px;
    `
    const Media4 = styled.img`
    width: 100%;
    width: 30%;
    min-width: 300px;
    `
    return (
        <>
        <section>
        <div class="container container-1">
            <div class="heading">
                <h1>Your Best Value Proposition</h1>
                <h4>"If you don't try this app, you'wont become the superhero you were meant to be"</h4>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <Media1 src={imageBanner} alt="banner"/>
                    <div class="text">
                        <div class="label-feature">
                            <h3>Special Feature</h3>
                        </div>
                        <div class="label-see">
                            See More ›
                        </div>
                    </div>
                </div>
                <div class="card">
                    <Media1 src={imageBanner} alt="banner"/>
                    <div class="text">
                        <div class="label-feature">
                            <h3>Special Feature</h3>
                        </div>
                        <div class="label-see">
                            See More ›
                        </div>
                    </div>
                </div>
                <div class="card">
                    <Media1 src={imageBanner} alt="banner"/>
                    <div class="text">
                        <div class="label-feature">
                            <h3>Special Feature</h3>
                        </div>
                        <div class="label-see">
                            See More ›
                        </div>
                    </div>
                </div>
                <div class="card">
                    <Media1 src={imageBanner} alt="banner"/> 
                    <div class="text">
                        <div class="label-feature">
                            <h3>Special Feature</h3>
                        </div>
                        <div class="label-see">
                            See More ›
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container container-2">
            <div class="heading">
                <h3>Your Best Value Proposition</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, maxime maiores repellat saepe error accusamus? Tempore corrupti eveniet assumenda repellendus eaque ipsa iusto asperiores amet?</h4>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <Media2 src={imageBanner} alt="banner"/>
                    <div class="text">
                        <div class="desc">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                        <div class="label-learn">Learn More</div>
                    </div>
                </div>
                <div class="card">
                    <Media2 src={imageBanner} alt="banner"/>
                    <div class="text">
                        <div class="desc">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                        <div class="label-learn">Learn More</div>
                    </div>
                </div>
                <div class="card">
                    <Media2 src={imageBanner} alt="banner"/>
                    <div class="text">
                        <div class="desc">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                        <div class="label-learn">Learn More</div>
                    </div>
                </div>
            </div>      
        </div>
    </section>
    <section>
        <div class="container container-3">
            <div class="card-wrapper">
                <div class="card">
                    <h2>The best way to wireframe a website or landing page</h2>
                </div>
                <div class="card">
                    <div class="text">
                        <div class="label-category">Category</div>
                        <div class="desc">
                        <h4>Keys to writing copy that actually converts and sells users</h4>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="label-category">Category</div>
                        <div class="desc">
                            <h4>Keys to writing copy that actually converts and sells users</h4>
                        </div>
                        <div class="label-author">Author name</div>
                    </div>
                    <div>
                        <div class="label-category">Category</div>
                        <div class="desc">
                            <h4>Keys to writing copy that actually converts and sells users</h4>
                        </div>
                        <div class="label-author">Author name</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container container-4">
            <div class="header">
                <Media4 src={imageBanner} alt="banner"/>
                <div>
                    <div class="text">
                        <div class="label-author">Author name</div>
                        <div class="desc">
                            <h2>The best way to wireframe a website</h2>
                        </div>
                        <div class="label-read">Read More</div>
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="text">
                        <div class="heading-text">
                            <h3>Keys to writing copy that actually converts and sells users</h3>
                        </div>
                        <div class="desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus quos voluptatum minima ratione assumenda.</p>
                        </div>
                        <div class="label-read">Read More</div>
                    </div>
                </div>
                <div class="card">
                    <div class="text">
                        <div class="heading-text">
                            <h3>Keys to writing copy that actually converts and sells users</h3>
                        </div>
                        <div class="desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus quos voluptatum minima ratione assumenda.</p>
                        </div>
                        <div class="label-read">Read More</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default App;
