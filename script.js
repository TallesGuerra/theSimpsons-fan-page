// your code goes here
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');

    const sections = {
        home: `
            <section id="home" class="active">
                <h2>Welcome to The Simpsons Fan Page</h2>
                                
                <img class="imgHome" src="https://cdn.prod.www.spiegel.de/images/9d61a283-0001-0004-0000-000001498677_w1200_r1.778_fpx66.67_fpy50.jpg">

                <img class="imgHome" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNWO7AGilg9BdMMipZWIZcGk-p03qGogS8w&s"> 

                <img class="imgHome" src="https://cdn.vox-cdn.com/thumbor/rQ1bBNYNox4NHDNnXUjpWT0IBhs=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47413330/the-simpsons-tv-series-cast-wallpaper-109911.0.0.jpeg">   

                <img class="imgHome" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdfbW9X6WOql8QsvHlwteS7V-IRMpK2_BHA&s">  

                <img class="imgHome" src="https://www.teahub.io/photos/full/155-1550218_watch-tv-los-simpson.jpg">    
        </section>
        `,
        characters: `
            <section id="characters">
                <h1>Characters</h1>
                <ul>
                   <li>
                        <img src="./assets/homer.png">
                        <a href="https://pt.wikipedia.org/wiki/Homer_Simpson" target="_blank">
                            <p>Homer Simpson </p>
                        </a>
                   </li>
                    
                    
                    <li>
                        <img src="./assets/marge.png">
                        <a href="https://pt.wikipedia.org/wiki/Marge_Simpson" target="_blank">
                            <p> Marge Simpson </p>
                        </a>
                   </li>
                   
                   
                    <li>
                        <img src="./assets/bart.png">
                        <a href="https://pt.wikipedia.org/wiki/Bart_Simpson" target="_blank">
                            <p>  Bart Simpson </p>
                        </a>
                   </li>
                   
                    <li>
                        <img src="../assets/lisa.png">
                        <a href="https://pt.wikipedia.org/wiki/Lisa_Simpson" target="_blank">
                             <p> Lisa Simpson </p>
                        </a>
                    </li>
                    
                    <li>
                        <img src="../assets/maggie.png">
                         <a href="https://pt.wikipedia.org/wiki/Maggie_Simpson" target="_blank">
                             <p>  Maggie Simpson </p>
                        </a>
                   </li>
                </ul>
            </section>
        `,
        episodes: `
            <section id="episodes">
                <p>Check out some episodes of The Simpsons!</p>
                
                <div class=allEpisodes> 
                    <div class ="season">
                        <h3> Season 1 </h3>
                        <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/f5go0jIoZ_4?si=RqoGC7qcYGVyoL7g" 
                            title="YouTube video player" 
                            frameborder="0" allow="accelerometer; 
                            autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture;
                            web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    
                    <div class ="season">
                     <h3> Season 2 </h3>
                     <iframe width="560" height="315" 
                          src="https://www.youtube.com/embed/PsVVCilvVJE?si=2QYZMpBEc_UrB1WA"
                          title="YouTube video player" 
                          frameborder="0" allow="accelerometer; autoplay; 
                          clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                          web-share" referrerpolicy="strict-origin-when-cross-origin" 
                          allowfullscreen>
                     </iframe>
                     </div>
             
                 
                    <div class="season">
                     <h3> Homer e a caminhonete  </h3>
                             <iframe width="560" height="315" 
                                 src="https://www.youtube.com/embed/jTncRpwf5dI?si=nDcXfDFBrWPsevXR" 
                                 title="YouTube video player" frameborder="0" allow="accelerometer; 
                                 autoplay; clipboard-write; encrypted-media; gyroscope; 
                                 picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                                 allowfullscreen>
                             </iframe>
                    </div>
                    
                    <div class="season">
                     <h3> Season 31 - Ep 1  </h3>
                             <iframe width="560" height="315" 
                                src="https://www.youtube.com/embed/vmQ1E6BBpqg?si=gS-om4hVJLBbX6JI"
                                 title="YouTube video player" frameborder="0" allow="accelerometer; 
                                 autoplay; clipboard-write; encrypted-media; gyroscope; 
                                 picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                                 allowfullscreen>
                             </iframe>
                    </div>
                    
                    <div class="season">
                     <h3> Explusos de Springfield  </h3>
                             <iframe width="560" height="315" 
                                src="https://www.youtube.com/embed/X690OuoZkA4?si=BwbVEHJwwHDHpzga" 
                                 title="YouTube video player" frameborder="0" allow="accelerometer; 
                                 autoplay; clipboard-write; encrypted-media; gyroscope; 
                                 picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                                 allowfullscreen>
                             </iframe>
                    </div>
                 </div>
            </section>
        `
    };

    function loadSection(section) {
        content.innerHTML = sections[section];
        document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
        document.getElementById(section).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('href').substring(1);
            loadSection(section);
        });
    });

    // Load the default section
    loadSection('home');
});