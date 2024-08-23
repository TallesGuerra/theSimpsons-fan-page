// your code goes here
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');

    const sections = {
        home: `
            <section id="home" class="active">
                <h2>Welcome to The Simpsons Fan Page</h2>
                                
                <img class="imgHome" src="./assets/img1.jpg">

                <img class="imgHome" src="./assets/img2.jpg"> 

                <img class="imgHome" src="./assets/img3.jpg">   

                <img class="imgHome" src="/assets/img4.jpg">  

                <img class="imgHome" src="/assets/img5.jpg">    
        </section>
        `,
        characters: `
            <section id="characters">
                <h1>Characters</h1>
                <ul>
                   <li>
                        <a href="https://pt.wikipedia.org/wiki/Homer_Simpson" target="_blank">                        
                        <img src="./assets/homer.png">
                            <p>Homer Simpson </p>
                        </a>
                   </li>
                    
                    
                    <li>
                    <a href="https://pt.wikipedia.org/wiki/Marge_Simpson" target="_blank">
                    <img src="./assets/marge.png">
                            <p> Marge Simpson </p>
                        </a>
                   </li>
                   
                   
                    <li>
                    <a href="https://pt.wikipedia.org/wiki/Bart_Simpson" target="_blank">
                    <img src="./assets/bart.png">
                            <p>  Bart Simpson </p>
                        </a>
                   </li>
                   
                    <li>
                        <a href="https://pt.wikipedia.org/wiki/Lisa_Simpson" target="_blank">
                        <img src="../assets/lisa.png">
                        <p> Lisa Simpson </p>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://pt.wikipedia.org/wiki/Maggie_Simpson" target="_blank">
                        <img src="../assets/maggie.png">
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