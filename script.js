// --- ORIGINAL SLIDER AND DECADE MODAL LOGIC (WITH ROBUSTNESS CHANGES) ---
document.addEventListener('DOMContentLoaded', function() {
    // Slider elements
    let items = document.querySelectorAll('.slider .item');
    let activeSliderItem = 0;
    let slider = document.querySelector('.slider');
    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');

    // Original Decade Modal elements
    const decadeModalElement = document.getElementById("modal");
    const decadeModalCloseButton = document.querySelector("#modal .close");
    const decadeModalBody = document.getElementById("modalBody");
    const decadeModalBackground = document.querySelector('#modal .modal-background');

    const modalContent = {
        0: {
            htmlContent:
                "<h1>1930s – The Origin of Horror</h1>" +
                "<p>The 1930s marked the birth of horror cinema as a recognized genre, with Universal Studios leading the way. Iconic monsters like <b>Dracula</b>, <b>Frankenstein</b>, and <b>The Mummy</b> introduced audiences to gothic horror, atmospheric storytelling, and memorable performances. These films established many of the tropes and archetypes that would define horror for decades to come.</p>" +
                "<h2>Dracula (1931)</h2>" +
                "<p>This version of Bram Stoker's novel brought Bela Lugosi's classic interpretation of Count Dracula to the screen. The film's haunting mood, dark cinematography, and Lugosi's frightening performance set the standard for the many vampire movies that followed.</p>" +
                "<img src='imagenes/modal/peliculas/dracula1931.png' class='modalImageP' alt='Descripcion Pelicula 1'>" +
                "<h2>Frankenstein (1931)</h2>" +
                "<p>James Whale directed this adaptation of Mary Shelley's book, which made Boris Karloff a star as the tragic Monster. The film's theme of science out of control and Karloff's pantomime acting have established it as a genre classic.</p>" +
                "<img src='imagenes/modal/peliculas/frankenstein1931.jpg' class='modalImageP' alt='Descripcion Pelicula 2'>" +
                "<h2>The mummy (1932)</h2>" +
                "<p>Starring Boris Karloff as the brought-back-to-life Imhotep, The Mummy blended supernatural horror and romance when the brought-back-to-life priest seeks out his lost love. Its gruesome visiuals and ancient Egyptian mythology added a new dimension to horror.</p>" +
                "<img src='imagenes/modal/peliculas/themummy1932.jpg' class='modalImageP' alt='Descripcion Pelicula 3'>" +
                "<h2>King Kong (1933)</h2>" +
                "<p>Though often classified as a monster-adventure film, King Kong had strong horror elements, with its terrifying depiction of a giant ape terrorizing New York City. The film’s groundbreaking stop-motion effects made it a milestone in special effects history.</p>" +
                "<img src='imagenes/modal/peliculas/kingkong1933.png' class='modalImageP' alt='Descripcion Pelicula 4'> "
            ,
            backgroundImage: "url('imagenes/modal/1930.png')"
        },
        1: {
            htmlContent:
                "<h1>1950s: Sci-Fi Horror and Atomic Age Fears</h1>" +
                "<p>The 1950s reflected post-World War II anxieties, particularly fears of nuclear destruction and extraterrestrial invasion. Science fiction merged with horror, introducing paranoia-driven narratives and terrifying monsters.</p>" +
                "<h2>The Thing from Another World (1951)</h2>" +
                "<p>This Cold War-era horror film depicted an alien menace terrorizing scientists in a remote outpost. Its themes of paranoia, distrust, and survival reflected societal fears of Communist infiltration, emphasizing the tension between logic and hysteria in the face of an unknown, shape-shifting threat.</p>" +
                "<img src='imagenes/modal/peliculas/thethingfromanotherworld1951.png' alt='Descripcion pelicula 1' class='modalImageP'>" +
                "<h2>Invasion of the Body Snatchers (1956)</h2>" +
                "<p>A chilling allegory on conformity and lost identity, this film follows a doctor uncovering a silent invasion as townspeople are replaced by soulless alien copies. Its eerie atmosphere, rising paranoia, and social critique on mass control cement it as a classic.</p>" +
                "<img src='imagenes/modal/peliculas/InvasionBody1956.jpg' class='modalImageP' alt='Descripcion Pelicula 2'>" +
                "<h2>Godzilla (1954)</h2>" +
                "<p>Japan’s most famous monster, Godzilla, was a direct metaphor for nuclear destruction following World War II. The film’s harrowing imagery of a devastated Tokyo resonated deeply with audiences, turning Godzilla into a lasting cultural icon.</p>" +
                "<img src='imagenes/modal/peliculas/godzilla1954.jpg' class='modalImageP' alt='Descripcion Pelicula 3'>" +
                "<h2>The Fly (1958)</h2>" +
                "<p>A tragic tale of scientific hubris, The Fly tells the story of a scientist whose teleportation experiment goes horribly wrong, merging him with a housefly. Its body horror elements and tragic undertones made it a standout of the decade.</p>" +
                "<img src='imagenes/modal/peliculas/thefly1958.png' class='modalImageP' alt='Descripcion Pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/1950.png')"
        },
        2: {
            htmlContent:
                "<h1>1970s: The Revolution of Horror</h1>" +
                "<p>The 1970s marked a turning point in horror, moving away from classic monsters toward psychological and visceral terror. Filmmakers pushed boundaries with intense violence, disturbing themes, and realistic storytelling.</p>" +
                "<h2>The Exorcist (1973)</h2>" +
                "<p>One of the scariest films ever made, The Exorcist terrified audiences with its depiction of demonic possession. Its shocking imagery, psychological horror, and religious themes made it a cultural phenomenon.</p>" +
                "<img src='imagenes/modal/peliculas/exorcist1973.jpg' class='modalImageP' alt='Descripcion Pelicula 1'>" +
                "<h2>The Texas Chain Saw Massacre (1974)</h2>" +
                "<p>Tobe Hooper’s raw, documentary-style film introduced Leatherface, a chainsaw-wielding killer, and redefined horror with its unrelenting intensity. Its gritty realism, disturbing atmosphere, and relentless brutality set a new standard for terror, influencing countless films in the genre.</p>" +
                "<img src='imagenes/modal/peliculas/TheTexasChainSawMassacre1974.jpg' class='modalImageP' alt='Descripcion Pelicula 2'>" +
                "<h2>Halloween (1978)</h2>" +
                "<p>John Carpenter’s slasher masterpiece introduced Michael Myers, a seemingly unstoppable killer stalking teenagers. The film’s atmospheric tension and eerie soundtrack laid the groundwork for the slasher genre.</p>" +
                "<img src='imagenes/modal/peliculas/halloween1978.png' class='modalImageP' alt='Descripcion Pelicula 3'>" +
                "<h2>Alien (1979)</h2>" +
                "<p> Combining science fiction with horror, Alien introduced one of the most terrifying creatures in cinema history: the Xenomorph. The film’s claustrophobic setting and slow-building tension redefined the genre.</p>" +
                "<img src='imagenes/modal/peliculas/alien1979.jpeg' class='modalImageP' alt='Descripcion Pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/1970.png')"
        },
        3: {
            htmlContent:
                "<h1>1980s: The Slasher Boom & Practical Effects</h1>" +
                "<p>The 1980s saw the rise of the slasher genre, with masked killers and excessive gore dominating the decade. Practical effects reached new heights, creating unforgettable horror imagery.</p>" +
                "<h2>The Shining (1980)</h2>" +
                "<p>Stanley Kubrick’s adaptation of Stephen King’s novel was a masterclass in psychological horror, with Jack Nicholson’s haunting performance, unsettling cinematography, and a slow-burning sense of dread. Its ambiguous storytelling and eerie atmosphere have made it one of horror’s most analyzed films.</p>" +
                "<img src='imagenes/modal/peliculas/theshining1980.jpg' class='modalImageP' alt='Descripcion Pelicula 1'>" +
                "<h2>The Thing (1982)</h2>" +
                "<p>John Carpenter’s paranoid horror masterpiece showcased groundbreaking practical effects, creating grotesque and nightmarish transformations. Its tense, isolated setting and themes of mistrust and survival turned it into a cult classic, influencing generations of horror and sci-fi films.</p>" +
                "<img src='imagenes/modal/peliculas/thething1982.jpg' class='modalImageP' alt='Descripcion Pelicula 2'>" +
                "<h2>A Nightmare on Elm Street (1984)</h2>" +
                "<p>Wes Craven introduced Freddy Krueger, a burned killer who haunts and murders victims in their dreams. His supernatural abilities, grotesque appearance, and dark humor set the film apart from other slashers, making Freddy one of horror’s most iconic villains.</p>" +
                "<img src='imagenes/modal/peliculas/nightmareonelmstreet1984.png' class='modalImageP' alt='Descripcion Pelicula 3'>" +
                "<h2>Hellraiser (1987)</h2>" +
                "<p>Clive Barker’s dark and twisted horror film introduced the Cenobites, otherworldly beings who blur the line between pain and pleasure. Its grotesque imagery, disturbing mythology, and exploration of human desire and suffering cemented it as a cult classic.</p>" +
                "<img src='imagenes/modal/peliculas/hellraiser1987.png' class='modalImageP' alt='Descripcion Pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/1980.png')"
        },
        4: {
            htmlContent:
                "<h1>1990s: Meta & Psychological Horror</h1>" +
                "<p>The 1990s shifted horror away from traditional slashers, embracing self-awareness, psychological depth, and supernatural elements. Found footage emerged, and gothic horror explored deeper themes.</p>" +
                "<h2>The Silence of the Lambs (1991)</h2>" +
                "<p>A psychological horror-thriller featuring Hannibal Lecter, a brilliant yet terrifying cannibal psychiatrist, and FBI agent Clarice Starling. The film won five Academy Awards, an exceptional feat for horror.</p>" +
                "<img src='imagenes/modal/peliculas/silenceofthelambs1991.jpg' class='modalImageP' alt='Descripcion pelicula 1' " +
                "<h2>Interview with the Vampire (1994)</h2>" +
                "<p>A gothic horror film that delves into immortality, loneliness, and morality through the complex relationship between vampires Lestat and Louis. Their existential struggles and shifting dynamic add depth to this visually rich and melancholic tale of eternal life.</p>" +
                "<img src='imagenes/modal/peliculas/interviewwiththevampire1994.jpg' class='modalImageP' alt='Descripcion pelicula 2'>" +
                "<h2>Scream (1996)</h2>" +
                "<p>Wes Craven revitalized the slasher genre with this self-aware horror film, where characters recognized and subverted classic horror tropes while being hunted by the cunning and brutal Ghostface, blending satire, suspense, and genuine scares.</p>" +
                "<img src='imagenes/modal/peliculas/scream1996.png' class='modalImageP' alt='Descripcion pelicula 3'>" +
                "<h2>The Blair Witch Project (1999)</h2>" +
                "<p>A found-footage horror phenomenon that followed three filmmakers lost in the woods, using shaky camerawork, improvisation, and psychological tension to create an unsettling sense of realism, leaving much of the terror to the audience’s imagination.</p>" +
                "<img src='imagenes/modal/peliculas/blairwitch1999.png' class='modalImageP' alt='Descripcion pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/1990.png')"
        },
        5: {
            htmlContent:
                "<h1>2000s: Remakes & Torture Horror</h1>" +
                "<p>The 2000s saw a wave of horror remakes, bringing back classics with modern intensity. The torture porn subgenre also emerged, with films like Saw and Hostel focusing on extreme violence and psychological torment. Supernatural horror gained traction with hits like The Ring, blending eerie atmosphere with disturbing imagery.</p>" +
                "<h2>The Others (2001)</h2>" +
                "<p>A gothic horror film about a mother shielding her light-sensitive children from unseen forces in their isolated mansion, building an eerie atmosphere that leads to one of the genre’s most haunting and unforgettable twists.</p>" +
                "<img src='imagenes/modal/peliculas/theothers2001.jpg' class='modalImageP' alt='Descripcion 1'>" +
                "<h2>The Ring (2002)</h2>" +
                "<p>A chilling supernatural horror about a cursed videotape that dooms its viewers to death in seven days. Blending eerie visuals, psychological tension, and a creeping sense of dread, the film introduced Samara, a vengeful ghost whose unsettling presence and tragic backstory made her one of horror’s most terrifying figures.</p>" +
                "<img src='imagenes/modal/peliculas/thering2002.png' class='modalImageP' alt='Descripcion 2'>" +
                "<h2>Saw (2004)</h2>" +
                "<p>A psychological horror-thriller that launched the torture horror trend, Saw introduced the sadistic Jigsaw Killer, who forced victims into gruesome traps designed to test their will to live. Its shocking twists, moral dilemmas, and brutal scenarios made it a defining film of the 2000s horror landscape.</p>" +
                "<img src='imagenes/modal/peliculas/saw2004.jpg' class='modalImageP' alt='Descripcion 3'>" +
                "<h2>The Hills Have Eyes (2006)</h2>" +
                "<p>A brutal remake of Wes Craven’s 1977 classic, The Hills Have Eyes follows a stranded family in the desert, where they are hunted by grotesque, radiation-mutated cannibals. With intense violence, relentless suspense, and unflinching brutality, the film redefined survival horror for a modern audience.</p>" +
                "<img src='imagenes/modal/peliculas/thehillshaveeyes2006.jpg' class='modalImageP' alt='Descripcion 4'>"
            ,
            backgroundImage: "url('imagenes/modal/2000.png')"
        },
        6: {
            htmlContent:
                "<h1>2010s: The Horror Renaissance</h1>" +
                "<p>Horror evolved with intelligent, thought-provoking films that combined psychological depth, social commentary, and supernatural terror. Movies like Get Out and Hereditary pushed the genre beyond simple scares, exploring themes of trauma, identity, and societal fears while still delivering unsettling and memorable horror experiences.</p>" +
                "<h2>It Follows (2014)</h2>" +
                "<p>A minimalist yet terrifying film, this film introduces a relentless supernatural entity that pursues its victims after any sexual contact. With a dreamlike atmosphere, eerie cinematography, and an unnerving score, the film creates a constant sense of dread, redefining supernatural horror with its unique premise and slow-burning tension.</p>" +
                "<img src='imagenes/modal/peliculas/itfollows2014.jpg' class='modalImageP' alt='Descripcion pelicula 1'>" +
                "<h2>The Witch (2015)</h2>" +
                "<p>A slow-burn folk horror film set in 1600s New England, The Witch follows a Puritan family exiled to the wilderness, where paranoia and religious extremism drive them to madness. With haunting cinematography, eerie authenticity, and psychological dread, it masterfully explores isolation, faith, and the fear of the unknown.</p>" +
                "<img src='imagenes/modal/peliculas/thewitch2015.jpg' class='modalImageP' alt='Descripcion pelicula 2'>" +
                "<h2>Get Out (2017)</h2>" +
                "<p>A psychological horror film blending racial commentary and psychological terror, Get Out follows a Black man visiting his white girlfriend’s family, only to uncover a sinister secret. With unsettling tension, social satire, and mind-bending twists, Jordan Peele’s directorial debut redefined modern horror, earning him an Oscar for Best Original Screenplay.</p>" +
                "<img src='imagenes/modal/peliculas/getout2017.jpg' class='modalImageP' alt='Descripcion pelicula 3'>" +
                "<h2>Hereditary (2018)</h2>" +
                "<p>A disturbing family horror film that explores grief, trauma, and supernatural terror, Hereditary follows a family unraveling dark secrets after their grandmother’s death. With masterful tension, unsettling imagery, and an unforgettable performance by Toni Collette, the film builds to a shocking and nightmarish climax that lingers long after the credits roll.</p>" +
                "<img src='imagenes/modal/peliculas/hereditary2018.jpg' class='modalImageP' alt='Descripcion pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/2010.png')"
        },
        7: {
            htmlContent:
                "<h1>2020s: The Evolution of Horror</h1>" +
                "<p>Horror continues to expand, exploring new themes, storytelling techniques, and psychological depth. Modern films challenge traditional tropes, blending horror with social issues, psychological tension, and unexpected narratives.</p>" +
                "<h2>The Invisible Man (2020)</h2>" +
                "<p>A modern reimagining of the classic tale, The Invisible Man shifts focus to psychological abuse, gaslighting, and paranoia. With intense suspense, Elisabeth Moss delivers a gripping performance as a woman haunted by an unseen force, blurring the line between reality and delusion in a chilling portrayal of domestic horror.</p>" +
                "<img src='imagenes/modal/peliculas/theinvisibleman2020.jpg' class='modalImageP' alt='Descripcion pelicula 1'>" +
                "<h2>Nope (2022)</h2>" +
                "<p>Jordan Peele’s Nope blends sci-fi horror with sharp social commentary, exploring themes of spectacle, exploitation, and humanity’s obsession with the unknown. With eerie visuals and slow building tension, the film redefines extraterrestrial horror while critiquing the entertainment industry’s thirst for shocking spectacle.</p>" +
                "<img src='imagenes/modal/peliculas/nope2022.jpg' class='modalImageP' alt='Descripcion pelicula 2'>" +
                "<h2>Barbarian (2022)</h2>" +
                "<p>Barbarian is a subversive horror film that constantly shifts audience expectations, starting as a simple rental mix up before unraveling into psychological terror. Blending social commentary with shocking twists, it explores themes of trust, trauma, and the hidden dangers lurking beneath the surface of everyday situations.</p>" +
                "<img src='imagenes/modal/peliculas/barbarian2022.png' class='modalImageP' alt='Descripcion pelicula 3'>" +
                "<h2>Smile (2022)</h2>" +
                "<p>Smile is a psychological horror film that delves into the lasting effects of trauma, following a therapist plagued by a sinister entity that spreads through its victims’ terrifying smiles. As paranoia and dread intensify, the film explores the inescapable nature of fear and psychological suffering.</p>" +
                "<img src='imagenes/modal/peliculas/smile2022.jpg' class='modalImageP' alt='Descripcion pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/2020.png')"
        }
    }; // Ensure your full modalContent object is here

    function updateSliderItemBackground(activeIndex) {
        if (!slider) return;
        let bgImageUrl = '';
        switch (activeIndex) {
            case 0: bgImageUrl = "url('imagenes/slider/1920.avif')"; break;
            case 1: bgImageUrl = "url('imagenes/slider/1950.webp')"; break;
            case 2: bgImageUrl = "url('imagenes/slider/1970.avif')"; break;
            case 3: bgImageUrl = "url('imagenes/slider/1980.jpg')"; break;
            case 4: bgImageUrl = "url('imagenes/slider/1990.jpg')"; break;
            case 5: bgImageUrl = "url('imagenes/slider/2000.avif')"; break;
            case 6: bgImageUrl = "url('imagenes/slider/2010.jpg')"; break;
            case 7: bgImageUrl = "url('imagenes/slider/2020.webp')"; break;
        }
        slider.style.backgroundImage = bgImageUrl;
    }

    function loadShowSlider() {
        if (!slider || !items || items.length === 0) return;
        items.forEach((item) => {
            item.style.transform = `translateX(0)`;
            item.style.zIndex = 0;
            item.style.filter = 'blur(5px)';
            item.style.opacity = 0;
        });
        if (items[activeSliderItem]) {
            items[activeSliderItem].style.transform = `none`;
            items[activeSliderItem].style.zIndex = 1;
            items[activeSliderItem].style.filter = 'none';
            items[activeSliderItem].style.opacity = 1;
        }
        updateSliderItemBackground(activeSliderItem);
        let nextIndex = (activeSliderItem + 1) % items.length;
        if (items[nextIndex]) {
            items[nextIndex].style.transform = `translateX(120px) scale(0.8) perspective(16px) rotateY(-1deg)`;
            items[nextIndex].style.zIndex = 0;
            items[nextIndex].style.filter = 'blur(5px)';
            items[nextIndex].style.opacity = 0.6;
        }
        let prevIndex = (activeSliderItem - 1 + items.length) % items.length;
        if (items[prevIndex]) {
            items[prevIndex].style.transform = `translateX(-120px) scale(0.8) perspective(16px) rotateY(1deg)`;
            items[prevIndex].style.zIndex = 0;
            items[prevIndex].style.filter = 'blur(5px)';
            items[prevIndex].style.opacity = 0.6;
        }
    }

    if (slider && items && items.length > 0) {
        loadShowSlider();
        if (nextButton) {
            nextButton.onclick = function() {
                activeSliderItem = (activeSliderItem + 1) % items.length;
                loadShowSlider();
            }
        }
        if (prevButton) {
            prevButton.onclick = function() {
                activeSliderItem = (activeSliderItem - 1 + items.length) % items.length;
                loadShowSlider();
            }
        }
        items.forEach((item, index) => {
            item.onclick = function() {
                openDecadeModal(index);
            };
        });
    }

    function openDecadeModal(index) {
        if (!decadeModalElement || !decadeModalBody || !decadeModalBackground || typeof modalContent === 'undefined' || !modalContent[index]) return;
        const content = modalContent[index];
        if (content && content.htmlContent) {
            decadeModalBody.innerHTML = content.htmlContent;
        } else {
            decadeModalBody.innerHTML = "<p>Content not available.</p>";
        }
        decadeModalElement.style.display = "block";
        document.body.classList.add('modal-open');
        if (content && content.backgroundImage) {
            decadeModalBackground.style.backgroundImage = content.backgroundImage;
            decadeModalBackground.style.animation = 'none';
            void decadeModalBackground.offsetWidth;
            decadeModalBackground.style.animation = 'scaleInBackground 0.6s forwards';
        } else {
            decadeModalBackground.style.backgroundImage = '';
        }
    }

    if (decadeModalCloseButton) {
        decadeModalCloseButton.onclick = function() {
            if (decadeModalElement) decadeModalElement.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    }

    if (decadeModalElement) {
        window.addEventListener('click', function(event) {
            if (event.target === decadeModalElement) {
                decadeModalElement.style.display = "none";
                document.body.classList.remove('modal-open');
            }
        });
    }
});


// --- BEGIN RANDOM QUIZ POP-UP SCRIPT ---
document.addEventListener('DOMContentLoaded', function() {
    console.log("[QuizPopUp] DOMContentLoaded: Initializing Quiz Pop-up script.");

    const quizPopupModal = document.getElementById('quizPopupModal');
    const closeQuizBtn = document.querySelector('#quizPopupModal .quiz-popup-close-btn');
    const questionArea = document.getElementById('popupQuizQuestionArea');
    const feedbackArea = document.getElementById('popupQuizFeedbackArea');
    const submitQuizBtn = document.getElementById('submitPopupQuizAnswer');

    if (!quizPopupModal) {
        console.log("[QuizPopUp] Quiz pop-up modal HTML element ('quizPopupModal') not found on this page. Script will not run.");
        return;
    }
    if (!closeQuizBtn || !questionArea || !feedbackArea || !submitQuizBtn) {
        console.warn("[QuizPopUp] One or more essential quiz pop-up child elements (close button, question area, etc.) not found. Functionality may be impaired.");
    }

    const allPopupQuizzes = [
        {
            id: "q1",
            question: "What is the name of the hotel in 'The Shining' (1980)?",
            answers: { a: "The Overlook Hotel", b: "The Bates Motel", c: "The Grand Budapest Hotel" },
            correctAnswer: "a",
            hintText: "This iconic hotel is central to the film's psychological horror. You can find details on the",
            hintLinkPageName: "1980s page."
        },
        {
            id: "q2",
            question: "Which film features a killer who attacks victims in their dreams?",
            answers: { a: "Halloween", b: "Friday the 13th", c: "A Nightmare on Elm Street" },
            correctAnswer: "c",
            hintText: "Think about the slasher boom of the 1980s. More info on the",
            hintLinkPageName: "1980s page."
        },
        {
            id: "q3",
            question: "In 'Alien' (1979), what is the name of the ship's computer?",
            answers: { a: "HAL 9000", b: "Mother", c: "Deep Thought" },
            correctAnswer: "b",
            hintText: "This groundbreaking sci-fi horror film is featured on the",
            hintLinkPageName: "1970s page."
        },
        {
            id: "q4",
            question: "Which director is famous for the 'Evil Dead' series?",
            answers: { a: "George A. Romero", b: "Tobe Hooper", c: "Sam Raimi" },
            correctAnswer: "c",
            hintText: "The first 'Evil Dead' film was a hallmark of 1980s horror. Check the",
            hintLinkPageName: "1980s page."
        },
        {
            id: "q5",
            question: "What type of mask does Jason Voorhees famously wear?",
            answers: { a: "A William Shatner mask", b: "A hockey mask", c: "A clown mask" },
            correctAnswer: "b",
            hintText: "Jason's iconic look solidified in the 1980s slasher era. See the",
            hintLinkPageName: "1980s page."
        },
        {
            id: "q6",
            question: "Which found footage film popularized the genre in 1999?",
            answers: { a: "Paranormal Activity", b: "The Blair Witch Project", c: "[REC]" },
            correctAnswer: "b",
            hintText: "This film was a phenomenon at the end of the 1990s. Find it on the",
            hintLinkPageName: "1990s page or our Found Footage genre page."
        },
        {
            id: "q7",
            question: "The 'Unholy Trinity' of Folk Horror includes 'The Wicker Man', 'Witchfinder General', and which other film?",
            answers: { a: "Midsommar", b: "The Ritual", c: "The Blood on Satan's Claw" },
            correctAnswer: "c",
            hintText: "These classic films defined a subgenre. Learn more on the",
            hintLinkPageName: "Folk Horror genre page or 1970s page."
        },
        {
            id: "q8",
            question: "What decade is considered the 'Golden Age' of Slasher films?",
            answers: { a: "1970s", b: "1980s", c: "1990s" },
            correctAnswer: "b",
            hintText: "Many iconic slashers emerged during this period. Visit the",
            hintLinkPageName: "1980s page or our Slasher genre page."
        },
        {
            id: "q9",
            question: "Universal Studios was famous for which type of horror films in the 1930s?",
            answers: { a: "Slasher films", b: "Monster movies", c: "Found footage" },
            correctAnswer: "b",
            hintText: "Think Dracula and Frankenstein! More on the",
            hintLinkPageName: "1930s page or Gothic Horror genre page."
        },
        {
            id: "q10",
            question: "What 1950s fear heavily influenced Sci-Fi Horror films of that era?",
            answers: { a: "Economic depression", b: "Alien invasions and nuclear paranoia", c: "Supernatural curses" },
            correctAnswer: "b",
            hintText: "The Cold War and atomic age shaped many films. See the",
            hintLinkPageName: "1950s page or Sci-Fi Horror genre page."
        }
    ];

    let currentQuizQuestion = null;
    const COOLDOWN_DURATION_MS = 5 * 60 * 1000;
    let correctlyAnsweredQuizIds = JSON.parse(localStorage.getItem('correctlyAnsweredQuizIds_v1')) || [];
    console.log("[QuizPopUp] Initial correctly answered IDs from localStorage:", correctlyAnsweredQuizIds);

    function getPageLinkFromName(pageName) {
        console.log("[QuizPopUp] getPageLinkFromName called for:", pageName);
        const lowerPageName = pageName.toLowerCase();

        // ** MODIFIED RETURN VALUES **
        // Assuming files are like "ProyectoIngles/1930s.html", "ProyectoIngles/gothic.html", etc.
        // (NO subfolder named after the page itself)

        if (lowerPageName.includes("1930s")) return "1930s.html";
        if (lowerPageName.includes("1950s")) return "1950s.html";
        if (lowerPageName.includes("1970s")) return "1970s.html";
        if (lowerPageName.includes("1980s")) return "1980s.html"; // Changed from "1980s/1980s.html"
        if (lowerPageName.includes("1990s")) return "1990s.html";
        if (lowerPageName.includes("2000s")) return "2000s.html";
        if (lowerPageName.includes("2010s")) return "2010s.html";
        if (lowerPageName.includes("2020s")) return "2020s.html";
        if (lowerPageName.includes("found footage")) return "foundfootage.html"; // Changed
        if (lowerPageName.includes("folk horror")) return "folk.html";         // Changed
        if (lowerPageName.includes("slasher")) return "slasher.html";          // Changed
        if (lowerPageName.includes("gothic horror")) return "gothic.html";     // Changed
        if (lowerPageName.includes("sci-fi horror")) return "scifi.html";        // Changed
        if (lowerPageName.includes("psychological")) return "psychological.html"; // Changed

        console.warn("[QuizPopUp] No specific link mapping found for pageName:", pageName, ". Defaulting to index.html");
        return "index.html"; // Fallback
    }

    function getPathPrefixForLinks() {
        const currentPath = window.location.pathname; // e.g., /C:/Users/ASUS/WebstormProjects/ProyectoIngles/gothic/gothic.html
        const projectFolderName = "ProyectoIngles"; // <<< MAKE SURE THIS EXACTLY MATCHES YOUR PROJECT FOLDER'S NAME
        let prefix = "";

        // Standardize slashes for cross-platform compatibility in logic (though pathname usually uses /)
        const normalizedPath = currentPath.replace(/\\/g, '/');
        const projectRootMarker = `/${projectFolderName}/`; // e.g., /ProyectoIngles/

        const indexOfProjectRoot = normalizedPath.indexOf(projectRootMarker);

        if (indexOfProjectRoot !== -1) {
            // Get the path part that is *inside* the ProyectoIngles folder
            // For /C:/.../ProyectoIngles/index.html -> "index.html"
            // For /C:/.../ProyectoIngles/gothic/gothic.html -> "gothic/gothic.html"
            const pathInsideProject = normalizedPath.substring(indexOfProjectRoot + projectRootMarker.length);

            // Count directory segments within the project folder path (excluding the filename itself)
            const segments = pathInsideProject.split('/').filter(segment => segment.length > 0);

            let depth = 0;
            if (segments.length > 0 && segments[segments.length - 1].includes('.html')) {
                depth = segments.length - 1; // Number of folders deep
            } else if (segments.length > 0 && !segments[segments.length - 1].includes('.')) {
                depth = segments.length; // Path might end with a folder name if index.html is implied
            } else {
                depth = 0; // Likely at the root of ProyectoIngles (e.g. index.html or just /ProyectoIngles/)
            }


            for (let i = 0; i < depth; i++) {
                prefix += "../";
            }
            console.log(`[QuizPopUp] Path Debug: currentPath='${currentPath}', pathInsideProject='${pathInsideProject}', calculated depth=${depth}, prefix='${prefix}'`);
        } else {
            // Fallback if projectFolderName is not clearly found in the path.
            // This might happen if the structure is different than expected or if viewing files from an unexpected location.
            const currentPageFilename = currentPath.substring(currentPath.lastIndexOf('/') + 1).toLowerCase();
            if (currentPageFilename === 'index.html' || currentPageFilename === '') {
                prefix = ""; // Assume root
            } else {
                prefix = "../"; // Assume one level deep as a guess
            }
            console.warn(`[QuizPopUp] Path Debug: projectFolderName '${projectFolderName}' not found in path or structure unclear. currentPath='${currentPath}'. Using fallback prefix='${prefix}'`);
        }
        return prefix;
    }


    function selectAndDisplayQuiz() {
        console.log("[QuizPopUp] selectAndDisplayQuiz called.");
        if (!questionArea || !submitQuizBtn || !feedbackArea) {
            console.error("[QuizPopUp] Essential quiz display elements missing in selectAndDisplayQuiz.");
            return false;
        }

        const availableQuestions = allPopupQuizzes.filter(q => !correctlyAnsweredQuizIds.includes(q.id));
        console.log(`[QuizPopUp] Total questions: ${allPopupQuizzes.length}, Correctly answered: ${correctlyAnsweredQuizIds.length}, Available for quiz: ${availableQuestions.length}`);

        if (availableQuestions.length === 0) {
            feedbackArea.innerHTML = "<p>Wow, you've mastered all our current trivia questions! No more quizzes for now.</p>";
            feedbackArea.className = 'correct';
            localStorage.setItem('allQuizzesMastered_v1', 'true');
            console.log("[QuizPopUp] All unique quiz questions answered correctly! Setting 'allQuizzesMastered_v1' to true.");
            if(submitQuizBtn) submitQuizBtn.disabled = true;
            return false;
        }

        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuizQuestion = availableQuestions[randomIndex];
        console.log("[QuizPopUp] Selected question ID:", currentQuizQuestion.id, "Question:", currentQuizQuestion.question);


        const answersHTML = [];
        for (const letter in currentQuizQuestion.answers) {
            answersHTML.push(
                `<label>
                    <input type="radio" name="popupQuizAnswer" value="${letter}">
                    ${letter.toUpperCase()}: ${currentQuizQuestion.answers[letter]}
                </label>`
            );
        }

        questionArea.innerHTML = `
            <div class="quiz-question">${currentQuizQuestion.question}</div>
            <div class="quiz-answers">${answersHTML.join('')}</div>
        `;
        feedbackArea.innerHTML = '';
        feedbackArea.className = '';
        if(submitQuizBtn) submitQuizBtn.disabled = false;
        return true;
    }

    function showQuizPopup() {
        console.log("[QuizPopUp] showQuizPopup called.");
        if (!quizPopupModal) {
            console.error("[QuizPopUp] quizPopupModal element not found in showQuizPopup.");
            return;
        }
        if (localStorage.getItem('allQuizzesMastered_v1') === 'true') {
            console.log("[QuizPopUp] Attempted to show quiz, but all quizzes are mastered.");
            return;
        }

        const mainPageModal = document.getElementById('modal');
        if (mainPageModal && mainPageModal.style.display === 'block') {
            console.log("[QuizPopUp] Main decade modal is active, skipping quiz pop-up for now.");
            return;
        }

        console.log("[QuizPopUp] Preparing to display quiz question.");
        if (selectAndDisplayQuiz()) {
            quizPopupModal.style.display = 'block';
            document.body.classList.add('modal-open');
            console.log("[QuizPopUp] Quiz pop-up displayed.");
        } else {
            console.log("[QuizPopUp] No available questions to display or mastery achieved from selectAndDisplayQuiz.");
            if(quizPopupModal.style.display === 'block') quizPopupModal.style.display = 'none';
        }
    }

    function closeQuizPopup() {
        console.log("[QuizPopUp] closeQuizPopup called.");
        if (!quizPopupModal) return;
        quizPopupModal.style.display = 'none';
        document.body.classList.remove('modal-open');

        const cooldownEndTime = Date.now() + COOLDOWN_DURATION_MS;
        sessionStorage.setItem('quizCooldownEndTime_v1', cooldownEndTime.toString());
        console.log(`[QuizPopUp] Quiz pop-up cooldown set. Next attempt possible after ${new Date(cooldownEndTime).toLocaleTimeString()}`);
    }

    if (submitQuizBtn && questionArea && feedbackArea) {
        submitQuizBtn.addEventListener('click', function() {
            console.log("[QuizPopUp] Submit button clicked.");
            if (!currentQuizQuestion) {
                console.error("[QuizPopUp] No current quiz question to submit.");
                return;
            }

            const selectedOption = questionArea.querySelector('input[name="popupQuizAnswer"]:checked');
            if (selectedOption) {
                const userAnswer = selectedOption.value;
                console.log(`[QuizPopUp] User answered: ${userAnswer}. Correct answer: ${currentQuizQuestion.correctAnswer}`);
                let feedbackMsg = '';
                // IMPORTANT: The path prefix logic for hints is complex due to varying page depths.
                // The getPathPrefixForLinks() is a heuristic. Test this thoroughly.
                // For maximum reliability with your current file structure (HTML files in own folders),
                // ensure getPageLinkFromName returns paths like 'foldername/filename.html' (relative to root)
                // and getPathPrefixForLinks adjusts correctly.
                const pathPrefix = getPathPrefixForLinks();


                if (userAnswer === currentQuizQuestion.correctAnswer) {
                    feedbackMsg = 'Correct! Well done!';
                    feedbackArea.className = 'correct';
                    if (!correctlyAnsweredQuizIds.includes(currentQuizQuestion.id)) {
                        correctlyAnsweredQuizIds.push(currentQuizQuestion.id);
                        localStorage.setItem('correctlyAnsweredQuizIds_v1', JSON.stringify(correctlyAnsweredQuizIds));
                        console.log("[QuizPopUp] Correct answer. Updated correctlyAnsweredQuizIds:", correctlyAnsweredQuizIds);
                    }
                } else {
                    feedbackMsg = `Oops! The correct answer was ${currentQuizQuestion.correctAnswer.toUpperCase()}: ${currentQuizQuestion.answers[currentQuizQuestion.correctAnswer]}.`;
                    if (currentQuizQuestion.hintText && currentQuizQuestion.hintLinkPageName) {
                        const actualLink = getPageLinkFromName(currentQuizQuestion.hintLinkPageName);
                        const fullHintLink = `${pathPrefix}${actualLink}`; // Apply prefix
                        feedbackMsg += `<br>${currentQuizQuestion.hintText} <a href="${fullHintLink}" target="_blank" class="quiz-hint-link">${currentQuizQuestion.hintLinkPageName}</a>`;
                        console.log("[QuizPopUp] Incorrect answer. Showing hint link to:", fullHintLink);
                    }
                    feedbackArea.className = 'incorrect';
                }
                feedbackArea.innerHTML = feedbackMsg;
                submitQuizBtn.disabled = true;

                const remainingQuestions = allPopupQuizzes.filter(q => !correctlyAnsweredQuizIds.includes(q.id));
                if (remainingQuestions.length === 0) {
                    localStorage.setItem('allQuizzesMastered_v1', 'true');
                    feedbackArea.innerHTML += "<br>Congratulations, you've answered all available trivia questions correctly!";
                    console.log("[QuizPopUp] All quizzes mastered after this answer!");
                }

                setTimeout(closeQuizPopup, 6000);
            } else {
                feedbackArea.textContent = 'Please select an answer.';
                feedbackArea.className = '';
                console.log("[QuizPopUp] Submit attempt with no answer selected.");
            }
        });
    }

    if (closeQuizBtn) {
        closeQuizBtn.addEventListener('click', function() {
            console.log("[QuizPopUp] Close button clicked.");
            closeQuizPopup();
        });
    }

    if (quizPopupModal) {
        quizPopupModal.addEventListener('click', function(event) {
            if (event.target === quizPopupModal) {
                console.log("[QuizPopUp] Clicked outside modal content to close.");
                closeQuizPopup();
            }
        });
    }

    // Trigger Logic for Random Pop-up
    console.log("[QuizPopUp] Evaluating trigger logic...");
    if (quizPopupModal && localStorage.getItem('allQuizzesMastered_v1') !== 'true') {
        const currentTime = Date.now();
        const cooldownEndTimeString = sessionStorage.getItem('quizCooldownEndTime_v1');
        const cooldownEndTime = cooldownEndTimeString ? parseInt(cooldownEndTimeString, 10) : 0;
        console.log(`[QuizPopUp] Current time: ${new Date(currentTime).toLocaleTimeString()}, Cooldown ends: ${cooldownEndTime ? new Date(cooldownEndTime).toLocaleTimeString() : 'N/A (Cooldown Expired or First Run)'}`);


        if (currentTime >= cooldownEndTime) {
            console.log("[QuizPopUp] Cooldown has passed or no cooldown was set.");
            const showChance = 0.6;

            if (Math.random() < showChance) {
                const randomDelay = Math.floor(Math.random() * 8000) + 4000;
                console.log(`[QuizPopUp] Random chance passed! Quiz pop-up will try to show in ${randomDelay / 1000} seconds.`);
                setTimeout(showQuizPopup, randomDelay);
            } else {
                console.log("[QuizPopUp] Random chance failed. Quiz pop-up will not show this time.");
            }
        } else {
            console.log(`[QuizPopUp] Quiz pop-up is on cooldown. Try again after ${new Date(cooldownEndTime).toLocaleTimeString()}`);
        }
    } else if (localStorage.getItem('allQuizzesMastered_v1') === 'true') {
        console.log("[QuizPopUp] All quizzes mastered, no pop-ups will be shown (checked at trigger).");
    } else if (!quizPopupModal) {
        // This console log is now at the very beginning of this DOMContentLoaded block for the quiz.
        // console.log("[QuizPopUp] Trigger logic skipped: quizPopupModal element not found.");
    }

});
// --- END RANDOM QUIZ POP-UP SCRIPT ---

// --- BEGIN IN-PAGE GENRE QUIZ FUNCTIONALITY ---
    console.log("[InPageQuiz] Initializing In-Page Quiz Listeners.");

    function initializeInPageQuiz(quizId, questions, resultLogic) {
    const startButton = document.getElementById(`start${quizId.charAt(0).toUpperCase() + quizId.slice(1)}Btn`); // e.g., startGothicQuizBtn
    const quizArea = document.getElementById(`${quizId}Area`); // The new wrapper div
    const quizContainer = document.getElementById(`${quizId}Container`);
    const submitButton = document.getElementById(`submit${quizId.charAt(0).toUpperCase() + quizId.slice(1)}`); // e.g., submitGothicQuiz
    const resultArea = document.getElementById(`${quizId}Result`);

    if (!startButton || !quizArea || !quizContainer || !submitButton || !resultArea) {
        // console.log(`[InPageQuiz] Elements for quiz '${quizId}' not fully found on this page.`);
        return;
    }
    console.log(`[InPageQuiz] Setting up quiz: ${quizId}`);

    // Event listener for the "Start Quiz" button
    startButton.addEventListener('click', function() {
        console.log(`[InPageQuiz] Start button clicked for ${quizId}. Displaying quiz.`);
        // Build and display the questions only when the start button is clicked
        let questionsHTML = "";
        questions.forEach((q, index) => {
            let answersHTML = "";
            q.answers.forEach(ans => {
                answersHTML += `
                        <label>
                            <input type="radio" name="q${quizId}${index}" value="${ans.value}">
                            ${ans.text}
                        </label>
                    `;
            });
            questionsHTML += `
                    <div class="quiz-question">${q.question}</div>
                    <div class="quiz-answers">${answersHTML}</div>
                `;
        });
        quizContainer.innerHTML = questionsHTML;

        quizArea.style.display = 'block'; // Show the quiz content area
        resultArea.style.display = 'none'; // Ensure result area is hidden initially
        submitButton.style.display = 'block'; // Ensure submit button is visible
        startButton.style.display = 'none'; // Hide the start button after clicking
    });


    // Handle submission
    submitButton.addEventListener('click', function() {
        const userAnswers = [];
        questions.forEach((q, index) => {
            const selected = quizContainer.querySelector(`input[name="q${quizId}${index}"]:checked`);
            userAnswers.push(selected ? selected.value : null);
        });

        console.log(`[InPageQuiz] User answers for ${quizId}:`, userAnswers);
        const result = resultLogic(userAnswers);

        resultArea.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.description}</p>
                ${result.image ? `<img src="${result.image}" alt="${result.title}" style="max-width:200px; margin-top:15px; border-radius:5px;">` : ''}
            `;
        resultArea.style.display = 'block'; // Show the result
        submitButton.style.display = 'none'; // Hide the submit button after showing results
        // Optionally, show the start button again or provide a "Try Again" button
        // startButton.style.display = 'block'; // To allow retake
    });
}

    // --- Define Quizzes for each Genre Page ---

    // 1. Gothic Horror Quiz: "Which Classic Gothic Archetype Are You?"
    if (document.getElementById('gothicQuizContainer')) { // Only define if on the right page
        const gothicQuizQuestions = [
            {
                question: "When darkness falls, you feel most:",
                answers: [
                    { text: "Contemplative and melancholic", value: "a" },
                    { text: "Powerful and enigmatic", value: "b" },
                    { text: "Misunderstood and isolated", value: "c" },
                    { text: "Restless and longing", value: "d" }
                ]
            },
            {
                question: "Your ideal home would be:",
                answers: [
                    { text: "A grand, ancient castle with secret passages", value: "b" },
                    { text: "A secluded manor haunted by memories", value: "d" },
                    { text: "A remote laboratory filled with forbidden knowledge", value: "c" },
                    { text: "A candle-lit crypt, away from the mundane world", value: "a" }
                ]
            },
            {
                question: "Your relationship with society is best described as:",
                answers: [
                    { text: "Above it, observing its follies", value: "b" },
                    { text: "Tragically bound to it, yet separate", value: "c" },
                    { text: "Forever an outsider, yearning for connection", value: "d" },
                    { text: "Indifferent, you have eternity to consider", value: "a" }
                ]
            }
        ];

        function calculateGothicQuizResult(answers) {
            let counts = { a: 0, b: 0, c: 0, d: 0 };
            answers.forEach(ans => { if (ans) counts[ans]++; });

            let resultType = 'd'; // Default
            if (counts.a >= 2) resultType = 'a';
            else if (counts.b >= 2) resultType = 'b';
            else if (counts.c >= 2) resultType = 'c';
            // Simple majority or fallback logic
            else if (counts.a > counts.b && counts.a > counts.c && counts.a > counts.d) resultType = 'a';
            else if (counts.b > counts.a && counts.b > counts.c && counts.b > counts.d) resultType = 'b';
            else if (counts.c > counts.a && counts.c > counts.b && counts.c > counts.d) resultType = 'c';


            switch (resultType) {
                case 'a': return { title: "The Enigmatic Vampire", description: "You possess an ancient allure, a timeless elegance, and a taste for the finer, darker things in life. You command the night and its shadows.", image: "imagenes/quiz_results/vampire.jpg" }; // Placeholder image
                case 'b': return { title: "The Brooding Aristocrat", description: "You reside in a grand, imposing estate, perhaps with a dark secret or a family curse. You are powerful, charismatic, but carry an air of tragic nobility.", image: "imagenes/quiz_results/aristocrat.jpg" };
                case 'c': return { title: "The Tragic Creation", description: "Misunderstood and often feared, you yearn for acceptance but are burdened by your unnatural existence. Your strength is matched only by your sorrow.", image: "imagenes/quiz_results/creation.jpg" };
                case 'd':
                default: return { title: "The Restless Spirit", description: "Bound to a place of sorrow or injustice, you are a spectral presence, forever haunting the fringes of the living world, seeking peace or perhaps vengeance.", image: "imagenes/quiz_results/spirit.jpg" };
            }
        }
        initializeInPageQuiz('gothicQuiz', gothicQuizQuestions, calculateGothicQuizResult);
    }

    // 2. Slasher Quiz: "Could You Survive a Slasher Movie?"
    if (document.getElementById('slasherQuizContainer')) { // Example ID for slasher page
        const slasherQuizQuestions = [
            {
                question: "A strange noise comes from the basement. You:",
                answers: [
                    { text: "Go investigate alone, calling out 'Hello?'", value: "a" }, // classic mistake
                    { text: "Gather everyone, arm yourselves, and go as a group", value: "d" }, // smart
                    { text: "Immediately get out of the house and call the police", value: "c" }, // very smart
                    { text: "Dismiss it as 'just the wind' and suggest splitting up", value: "b" } // doomed
                ]
            },
            {
                question: "The phone lines are cut and your car won't start. Your next move?",
                answers: [
                    { text: "Panic and hide somewhere obvious", value: "a" },
                    { text: "Try to fix the car, even if it takes hours", value: "b" },
                    { text: "Fortify one room and wait for an opportunity", value: "d" },
                    { text: "Make a run for it through the woods to the nearest neighbor (miles away)", value: "c" }
                ]
            },
            {
                question: "When confronted by the masked killer, you:",
                answers: [
                    { text: "Try to reason with them", value: "b" },
                    { text: "Scream and trip over something", value: "a" },
                    { text: "Fight back with any makeshift weapon you can find", value: "d" },
                    { text: "Accept your fate", value: "c" } // not a survivor trait
                ]
            }
        ];
        function calculateSlasherQuizResult(answers) {
            let score = 0;
            if (answers[0] === 'd' || answers[0] === 'c') score++;
            if (answers[1] === 'd' || answers[1] === 'c') score++;
            if (answers[2] === 'd') score++;

            if (score >= 2) return { title: "The Final Survivor!", description: "You've got the smarts and the grit! You'd likely be the one to face down the killer and live to tell the tale.", image: "imagenes/quiz_results/final_girl.jpg" };
            if (score === 1) return { title: "Close Call!", description: "You made some good choices, but also some risky ones. You might survive... or become a memorable secondary victim.", image: "imagenes/quiz_results/slasher_closecall.jpg" };
            return { title: "Early Victim Fodder", description: "Oh dear. Your choices suggest you'd be one of the first to meet a gruesome end. Better stick to watching these movies!", image: "imagenes/quiz_results/slasher_victim.jpg" };
        }
        // IMPORTANT: Ensure your slasher.html has <div id="slasherQuizContainer">, <button id="submitSlasherQuiz">, <div id="slasherQuizResult">
        initializeInPageQuiz('slasherQuiz', slasherQuizQuestions, calculateSlasherQuizResult);
    }

    // 3. Psychological Horror Quiz: "Can You Navigate a Psychological Labyrinth?"
    if (document.getElementById('startPsychologicalQuizBtn')) {
        const psychologicalQuizQuestions = [
            {
                question: "You receive a mysterious, unsigned letter with a cryptic warning. You:",
                answers: [
                    { text: "Dismiss it as a prank and try to forget about it.", value: "a" },
                    { text: "Become consumed by paranoia, seeing hidden meanings everywhere.", value: "b" },
                    { text: "Methodically investigate its origin, questioning everyone involved.", value: "c" },
                    { text: "Share it with a trusted confidant, but secretly doubt their reactions.", value: "d" }
                ]
            },
            {
                question: "Reality starts to feel distorted, and you can't trust your senses. Your primary coping mechanism is:",
                answers: [
                    { text: "To cling rigidly to logic and tangible evidence, denying anything unusual.", value: "a" },
                    { text: "To embrace the surreal, perhaps you are perceiving a deeper truth.", value: "d" },
                    { text: "To meticulously document every strange occurrence.", value: "c" },
                    { text: "To withdraw completely, isolating yourself to avoid further confusion.", value: "b" }
                ]
            },
            {
                question: "The most unsettling type of horror for you involves:",
                answers: [
                    { text: "A clear, external, monstrous threat.", value: "a" },
                    { text: "The slow, insidious unraveling of someone's (or your own) mind.", value: "b" },
                    { text: "Deep ambiguity where you can't be sure what's real or who to trust.", value: "d" },
                    { text: "A hidden conspiracy or manipulator pulling strings behind the scenes.", value: "c" }
                ]
            }
        ];

        function calculatePsychologicalQuizResult(answers) {
            let bCount = answers.filter(ans => ans === 'b').length;
            let dCount = answers.filter(ans => ans === 'd').length;
            let cCount = answers.filter(ans => ans === 'c').length;
            // Default, more resilient result
            let result = { title: "The Cautious Observer", description: "You approach the unsettling with a degree of caution, perhaps preferring to analyze before being swept away. In a psychological tale, this might help you keep a tenuous grip on reality... or make you a target for more subtle manipulations.", image: "imagenes/quiz_results/cautious_observer.jpg" };

            if (bCount >= 2) {
                result = { title: "The Unraveling Mind", description: "You're deeply attuned to the fragility of perception. The line between reality and nightmare is perilously thin for you, making you a prime candidate for a truly terrifying psychological journey where your own thoughts become the enemy.", image: "imagenes/quiz_results/unraveling_mind.jpg" };
            } else if (dCount >= 2) {
                result = { title: "The Seeker of Hidden Truths", description: "You thrive where reality is questionable and are drawn to peeling back layers of deception. You might be the unreliable narrator or the one who sees the disturbing patterns others miss, for better or for worse.", image: "imagenes/quiz_results/ambiguity_master.jpg" };
            } else if (cCount >= 2) {
                result = { title: "The Rational Investigator", description: "You meticulously try to piece together the clues and understand the mechanics of the madness. However, in a psychological horror, even logic can be a trap! Your quest for truth might lead you to deeply unsettling discoveries about the human condition.", image: "imagenes/quiz_results/rational_investigator.jpg" };
            }
            return result;
        }
        initializeInPageQuiz('psychologicalQuiz', psychologicalQuizQuestions, calculatePsychologicalQuizResult);
    }

    // 4. Sci-Fi Horror Quiz: "What Cosmic Peril Awaits You?"
    if (document.getElementById('startScifiQuizBtn')) {
        const scifiQuizQuestions = [
            {
                question: "You intercept a strange signal from deep space. Your first instinct is to:",
                answers: [
                    { text: "Reply immediately! First contact!", value: "a" }, // Risky
                    { text: "Analyze it carefully for threats before doing anything.", value: "c" }, // Cautious
                    { text: "Boost the signal; maybe others should hear it too.", value: "b" }, // Spreads potential danger
                    { text: "Ignore it; some doors are best left unopened.", value: "d" }  // Avoidant but safe
                ]
            },
            {
                question: "A newly discovered alien artifact starts exhibiting strange properties. You:",
                answers: [
                    { text: "Touch it, obviously. For science!", value: "a" },
                    { text: "Quarantine it and run extensive remote diagnostics.", value: "d" },
                    { text: "Try to harness its power for humanity's benefit.", value: "b" },
                    { text: "Destroy it immediately before it can cause harm.", value: "c" }
                ]
            },
            {
                question: "If faced with an unknown, potentially hostile alien lifeform, your strategy is:",
                answers: [
                    { text: "Attempt peaceful communication and understanding.", value: "b" },
                    { text: "Observe from a safe distance and gather data.", value: "d" },
                    { text: "Preemptive strike – neutralize the threat before it acts.", value: "c" },
                    { text: "Run and hide, hoping it doesn't find you.", value: "a" }
                ]
            }
        ];
        function calculateScifiQuizResult(answers) {
            let aCount = answers.filter(ans => ans === 'a').length; // Reckless curiosity / victim
            let bCount = answers.filter(ans => ans === 'b').length; // Idealistic / potential hubris
            let cCount = answers.filter(ans => ans === 'c').length; // Aggressive / pragmatic
            let dCount = answers.filter(ans => ans === 'd').length; // Cautious survivor

            if (dCount >= 2) return { title: "The Wary Survivor", description: "Your caution and analytical approach give you the best chance of navigating cosmic horrors. You understand that the unknown is often best left undisturbed, or at least thoroughly investigated from afar.", image: "imagenes/quiz_results/scifi_survivor.jpg"};
            if (cCount >= 2) return { title: "The Pragmatic Defender", description: "You're not afraid to make tough choices when faced with an extraterrestrial threat. Your priority is survival, even if it means aggressive action against the unknown.", image: "imagenes/quiz_results/scifi_defender.jpg"};
            if (aCount >= 2) return { title: "Doomed by Curiosity", description: "Your insatiable curiosity or perhaps a touch of recklessness leads you straight into peril. In sci-fi horror, touching the glowing alien egg rarely ends well!", image: "imagenes/quiz_results/scifi_curious_victim.jpg"};
            return { title: "The Idealistic Explorer", description: "You believe in the potential for discovery and understanding, even with alien life. While noble, this idealism might be tragically misplaced when facing cosmic nightmares.", image: "imagenes/quiz_results/scifi_idealist.jpg"};
        }
        initializeInPageQuiz('scifiQuiz', scifiQuizQuestions, calculateScifiQuizResult);
    }

    // 5. Found Footage Quiz: "Would Your Found Footage Film Be a Hit?"
    if (document.getElementById('startFoundFootageQuizBtn')) {
        const foundFootageQuizQuestions = [
            {
                question: "You're investigating a local legend. Your primary camera is:",
                answers: [
                    { text: "A brand new, high-end 4K camera with stabilizers.", value: "a" }, // Less authentic
                    { text: "An old, slightly damaged camcorder you found.", value: "d" }, // Authentic!
                    { text: "Your smartphone, held vertically.", value: "c" }, // Modern, but...
                    { text: "Multiple GoPros strapped to everyone.", value: "b" } // Could work
                ]
            },
            {
                question: "When things get genuinely terrifying, your character with the camera:",
                answers: [
                    { text: "Drops the camera and runs for their life.", value: "b" }, // Realistic, but ends film
                    { text: "Keeps filming no matter what, even if it means certain doom.", value: "d" }, // Classic trope
                    { text: "Switches to a dramatic monologue about their fear.", value: "a" }, // Not very FF
                    { text: "The camera conveniently falls to capture the crucial moment perfectly.", value: "c" } // A bit too convenient
                ]
            },
            {
                question: "Your film's 'monster' or threat is mostly:",
                answers: [
                    { text: "Shown clearly in full CGI glory from the start.", value: "a" },
                    { text: "Heard, hinted at, and seen in fleeting, terrifying glimpses.", value: "d" },
                    { text: "Explained thoroughly by an old expert in a long interview.", value: "b" },
                    { text: "A series of escalating jump scares with loud noises.", value: "c" }
                ]
            }
        ];
        function calculateFoundFootageQuizResult(answers) {
            let score = 0;
            if (answers[0] === 'd') score++; else if (answers[0] === 'b') score += 0.5;
            if (answers[1] === 'd') score++; else if (answers[1] === 'b') score += 0.5; // Dropping camera is realistic too
            if (answers[2] === 'd') score++;

            if (score >= 2.5) return { title: "Viral Sensation!", description: "Your instincts for authenticity and suspense are spot on! Your found footage film would likely terrify audiences and become a word-of-mouth hit.", image: "imagenes/quiz_results/ff_hit.jpg"};
            if (score >= 1.5) return { title: "Cult Classic in the Making", description: "You've got some good ideas for tension and realism. Your film might not break the box office, but it could find a dedicated following among hardcore horror fans.", image: "imagenes/quiz_results/ff_cult.jpg"};
            return { title: "Straight to Bargain Bin", description: "Your approach might be missing some key elements of what makes found footage so effective. Perhaps a bit more subtlety and less shaky cam next time?", image: "imagenes/quiz_results/ff_flop.jpg"};
        }
        initializeInPageQuiz('foundFootageQuiz', foundFootageQuizQuestions, calculateFoundFootageQuizResult);
    }

    // 6. Folk Horror Quiz: "Would You Survive the Ancient Ritual?"
    if (document.getElementById('startFolkQuizBtn')) {
        const folkQuizQuestions = [
            {
                question: "You arrive in a remote, idyllic village for their annual festival. The locals are overly friendly and wear strange wicker masks. You:",
                answers: [
                    { text: "Embrace it! This is authentic culture!", value: "a" }, // Uh oh
                    { text: "Feel a growing unease and discreetly try to learn more about the festival's true nature.", value: "c" }, // Smart
                    { text: "Politely decline participation in the 'more unusual' rituals and observe from a distance.", value: "d" }, // Safer
                    { text: "Loudly mock their 'primitive' customs and demand Wi-Fi.", value: "b" } // Definitely doomed
                ]
            },
            {
                question: "You discover the village's prosperity is tied to an ancient, unsettling tradition. You:",
                answers: [
                    { text: "Try to expose them to the outside world.", value: "b" },
                    { text: "Respect their beliefs, even if they seem dark. It's not your place to judge.", value: "a" },
                    { text: "Plan your escape, very, very quietly.", value: "d" },
                    { text: "Attempt to understand and perhaps even integrate into their belief system.", value: "c" } // Risky
                ]
            },
            {
                question: "The 'May Queen' or 'Harvest Lord' selection is approaching, and you're getting strange looks. You:",
                answers: [
                    { text: "Feel honored and prepare your acceptance speech.", value: "a" },
                    { text: "Assume it's a misunderstanding and focus on enjoying the local mead.", value: "b" },
                    { text: "Realize you are in mortal danger and that the 'honor' is not what it seems.", value: "d" },
                    { text: "Try to convince another outsider to take your place.", value: "c" }
                ]
            }
        ];
        function calculateFolkQuizResult(answers) {
            let dCount = answers.filter(ans => ans === 'd').length;
            let cCount = answers.filter(ans => ans === 'c').length;

            if (answers.includes('b')) return { title: "The Oblivious Outsider", description: "Your lack of suspicion or outright disrespect for local customs would likely make you an early and easy target for the community's darker traditions. You probably wouldn't even see it coming.", image: "imagenes/quiz_results/folk_oblivious.jpg"};
            if (dCount >= 2) return { title: "The Cautious Escapee", description: "Your keen senses and healthy skepticism allow you to recognize the danger. With careful planning, you might just make it out before the final ritual!", image: "imagenes/quiz_results/folk_escapee.jpg"};
            if (cCount >=1 && dCount >=1) return { title: "The Reluctant Participant", description: "You're torn between understanding and survival. You might play along for a while, but your unease will grow. Your fate hangs in the balance.", image: "imagenes/quiz_results/folk_reluctant.jpg"};
            return { title: "The Eager Sacrifice", description: "Your enthusiasm for 'authentic experiences' and lack of critical thinking make you the perfect candidate for the festival's 'grand finale'. Enjoy your brief reign as May Queen/Harvest Lord!", image: "imagenes/quiz_results/folk_sacrifice.jpg"};
        }
        initializeInPageQuiz('folkQuiz', folkQuizQuestions, calculateFolkQuizResult);
    }
// --- END IN-PAGE GENRE QUIZ FUNCTIONALITY ---

    // --- MOVIE CARD IMAGE MODAL FUNCTIONALITY ---
    const imageDisplayModal = document.getElementById('movieCardImageModal');
    const modalMovieImageElement = document.getElementById('modalMovieImage');

    // Check if the primary modal elements exist on the current page
    if (imageDisplayModal && modalMovieImageElement) {
        const closeImageDisplayModalButton = imageDisplayModal.querySelector('.image-display-modal-close');
        const movieCards = document.querySelectorAll('.movie-card'); // Select all movie cards

        movieCards.forEach(card => {
            card.style.cursor = 'pointer'; // Add a visual cue that cards are clickable
            card.addEventListener('click', function(event) {
                // Prevent click from triggering if it's on an interactive element within the card (if any)
                if (event.target.closest('a, button')) { // Example: ignore clicks on links/buttons inside a card
                    return;
                }

                const imageInsideCard = this.querySelector('.movie-image'); // Get the image with class 'movie-image'
                if (imageInsideCard && imageInsideCard.src) {
                    modalMovieImageElement.src = imageInsideCard.src;
                    modalMovieImageElement.alt = imageInsideCard.alt || "Enlarged movie image"; // Use card image's alt text
                    imageDisplayModal.style.display = 'block';
                    document.body.classList.add('image-modal-active'); // Prevent body scroll
                } else {
                    console.warn("Could not find .movie-image or its src in the clicked card:", this);
                }
            });
        });

        // Function to close the image modal
        const closeImageModal = function() {
            imageDisplayModal.style.display = 'none';
            modalMovieImageElement.src = ""; // Clear image src to prevent brief display of old image
            document.body.classList.remove('image-modal-active'); // Re-enable body scroll
        }

        // Close modal when the close button (span with &times;) is clicked
        if (closeImageDisplayModalButton) {
            closeImageDisplayModalButton.addEventListener('click', closeImageModal);
        }

        // Close modal when clicking outside the modal image (on the overlay)
        imageDisplayModal.addEventListener('click', function(event) {
            // Check if the click is directly on the modal backdrop itself, not on the content/image
            if (event.target === imageDisplayModal) {
                closeImageModal();
            }
        });

        // Close modal with the Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && imageDisplayModal.style.display === 'block') {
                closeImageModal();
            }
        });
    }
    // --- END MOVIE CARD IMAGE MODAL FUNCTIONALITY ---


// --- SCRIPT TO CLEAR QUIZ-RELATED LOCALSTORAGE ON PAGE UNLOAD ---
window.addEventListener('beforeunload', function (e) {
    // Clear the specific localStorage items related to the quiz when the user is about to leave/close the page
    localStorage.removeItem('correctlyAnsweredQuizIds_v1');
    localStorage.removeItem('allQuizzesMastered_v1');
    // Note: quizCooldownEndTime_v1 is in sessionStorage, which clears automatically on session end.
    console.log('[QuizCleanup] Quiz-related localStorage (mastery and correctly answered IDs) items cleared on page unload.');
});
// --- END SCRIPT TO CLEAR LOCALSTORAGE ---