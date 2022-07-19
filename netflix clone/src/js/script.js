let popUp = document.getElementById("login");


//function to login popUp
function login() {
    popUp.style.display = "block";
}

let myVue = new Vue({
    el: '#myVueItem',

    data: {
        myModel: "Look for movies here",
        newItem: "",
        newItem: "",
        SearchInput: {serchText: ""},
       // watched:,

        movie: [

            {
                Title: "Black Panther",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
                Description:
                    "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced "
                    + "African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the "
                    + "throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther "
                    + "must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda "
                    + "from being dragged into a world war.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2018",
                Genre: "Adventure",
                Actors: "7",
            },
            {
                Title: "TRON: Legacy",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_SX300.jpg",
                Description:
                    "Sam Flynn, the tech-savvy 27-year-old son of Kevin Flynn, looks into his father's disappearance and finds himself pulled "
                    + "into the same world of fierce programs and gladiatorial games where his father has been living for 20 years. Along with "
                    + "Kevin's loyal confidant Quorra, father and son embark on a life-and-death journey across a visually-stunning cyber "
                    + "universe that has become far more advanced and exceedingly dangerous. Meanwhile, the malevolent program CLU, who dominates "
                    + "the digital world, plans to invade the real world and will stop at nothing to prevent their escape.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2010",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "Jurassic Park",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
                Description:
                    "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond "
                    + "has invited four individuals, along with his two grandchildren, to join him at Jurassic Park. But will everything go "
                    + "according to plan? A park employee attempts to steal dinosaur embryos, critical security systems are shut down and it now "
                    + "becomes a race for survival with dinosaurs roaming freely over the island.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1993",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "The Terminator",
                Poster: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                Description:
                    "Sent back from a dystopian 2029--where the cold machines have conquered the entire world--to 1984 Los Angeles, the "
                    + "indestructible cyborg-assassin known as the 'Terminator' commences his deadly mission to kill humankind's most important "
                    + "woman: the unsuspecting Sarah Connor. However, from the same war-torn post-apocalyptic future comes a battle-scarred "
                    + "defender--Kyle Reese, a brave soldier of the human Resistance Army--bent on stopping the cybernetic killer from eliminating "
                    + "the world's last hope. But, the Terminator has no feelings, he doesn't sleep, and above all, he won't stop until he carries "
                    + "out his grim task. Does our future lie in our past?",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1984",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "E.T. the Extra-Terrestrial",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                Description:
                    "After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. "
                    + "Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, "
                    + "to his brother and his little sister, Gertie, and the children decide to keep its existence a secret. Soon, however, "
                    + "E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1982",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "WALL·E",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
                Description:
                    "In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash "
                    + "from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left "
                    + "to clean up the mess. Mesmerized with trinkets of Earth's history and show tunes, WALL-E is alone on Earth except for a "
                    + "sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that "
                    + "life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living "
                    + "plant he found amongst the rubble. Consistent with her 'directive', EVE takes the plant and automatically enters a "
                    + "deactivated state except for a blinking green beacon. WALL-E, doesn't understand what has happened to his new friend, "
                    + "but, true to his love, he protects her from wind, rain, and lightning, even as she is unresponsive. One day a massive ship "
                    + "comes to reclaim EVE, but WALL-E, out of love or loneliness, hitches a ride on the outside of the ship to rescue EVE. "
                    + "The ship arrives back at a large space cruise ship, which is carrying all of the humans who evacuated Earth 700 years "
                    + "earlier. The people of Earth ride around this space resort on hovering chairs which give them a constant feed of TV and "
                    + "video chatting. They drink all of their meals through a straw out of laziness and/or bone loss, and are all so fat that "
                    + "they can barely move. When the auto-pilot computer, acting on hastily-given instructions sent many centuries before, tries "
                    + "to prevent the people of Earth from returning by stealing the plant, WALL-E, EVE, the portly captain, and a band of "
                    + "broken robots stage a mutiny.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2008",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "The Maze Runner",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",
                Description:
                    "Awakening in an elevator, remembering nothing of his past, Thomas emerges into a world of about thirty teenage boys, all "
                    + "without past memories, who have learned to survive under their own set of rules in a completely enclosed environment, "
                    + "subsisting on their own agriculture and supplies. With a new boy arriving every thirty days, the group has been in "
                    + "The Glade' for three years, trying to find a way to escape through the Maze that surrounds their living space "
                    + "(patrolled by cyborg monsters named 'Grievers'). They have begun to give up hope when a comatose girl arrives with a "
                    + "strange note, and their world begins to change with the boys dividing into two factions: those willing to risk their lives "
                    + "to escape and those wanting to hang onto what they've got and survive.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2014",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "Divergent",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTYxMzYwODE4OV5BMl5BanBnXkFtZTgwNDE5MzE2MDE@._V1_SX300.jpg",
                Description:
                    "Set in a futuristic dystopia where society is divided into five factions that each represent a different virtue, teenagers "
                    + "have to decide if they want to stay in their faction or switch to another - for the rest of their lives. Tris Prior makes "
                    + "a choice that surprises everyone. Then Tris and her fellow faction-members have to live through a highly competitive "
                    + "initiation process to live out the choice they have made. They must undergo extreme physical and intense psychological tests, "
                    + "that transform them all. But Tris has a secret that she is Divergent, which means she doesn't fit into any one group. If "
                    + "anyone knew, it would mean a certain death. As she discovers a growing conflict that threatens to unravel her seemingly "
                    + "peaceful society, this secret might help her save the people she loves... or it might destroy her.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2014",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "The Divergent Series: Insurgent",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTgxOTYxMTg3OF5BMl5BanBnXkFtZTgwMDgyMzA2NDE@._V1_SX300.jpg",
                Description:
                    "As she searches for allies and answers in the wake of the uprising, Tris and Four are on the run. Being hunted by Jeanine "
                    + "Matthews, the leader of the Erudite faction, Tris and Four will race against time as they try to figure out what Abnegation "
                    + "sacrificed their lives to protect, and why the Erudite leaders will do anything to stop them. Haunted by her past choices but " + "desperate to protect the ones she loves, Tris faces one impossible challenge after another as she unlocks the truth about the "
                    + "past and ultimately the future of her world.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2015",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "Death on the Nile",
                Poster: "https://m.media-amazon.com/images/M/MV5BNjI4ZTQ1OTYtNTI0Yi00M2EyLThiNjMtMzk1MmZlOWMyMDQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
                Description:
                    "Belgian sleuth Hercule Poirot's vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when "
                    + "a picture-perfect couple's idyllic honeymoon is tragically cut short. Set against an epic landscape of sweeping Egyptian "
                    + "desert vistas and the majestic Giza pyramids, this tale of unbridled passion and incapacitating jealousy features a "
                    + "cosmopolitan group of impeccably dressed travelers, and enough wicked twists and turns to leave audiences guessing until "
                    + "the final, shocking denouement.",
                CommingSoon: "1",
                Reminder: "4",
                ReleaseDate: "2022",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "The Italian Job",
                Poster: "https://m.media-amazon.com/images/M/MV5BNDYyNzYxNjYtNmYzMC00MTE0LWIwMmYtNTAyZDBjYTIxMTRhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
                Description:
                    "Led by John Bridger (Donald Sutherland) and Charlie Croker (Mark Wahlberg) a team is assembled for one last heist to steal $35 "
                    + "million in gold bars from a heavily guarded safe in Venice, Italy. After successfully pulling off the heist, a team member, "
                    + "Steve (Edward Norton), driven by greed and jealousy, arranges to take the gold for himself and eliminate the remaining members "
                    + "of the group. Thinking the team dead, he returns to Los Angeles with the gold. Charlie and the survivors of this betrayal "
                    + "follow Steve to L.A. to exact revenge against the traitor. Charlie enlists the help of John Bridger's daughter, Stella "
                    + "(Charlize Theron) - a professional safe cracker - to get revenge. With Stella and the hacking skills of Lyle (Seth Green), "
                    + "the explosives skills of 'Left Ear' (Yasiin Bey), and the driving skills of 'Handsome' Rob (Jason Statham) this new team "
                    + "plans and executes a daring heist that weaves through the freeways and subways of L.A.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2003",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Catch Me If You Can",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
                Description:
                    "A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks "
                    + "as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not "
                    + "only eludes capture, he revels in the pursuit.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2002",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "The Fast and the Furious: Tokyo Drift",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
                Description:
                    "An American teenager named Sean Boswell is a loner in school, however he challenges his rival for an illegal street racing, "
                    + "and he totals his car in the end of the race. To avoid time in prison he is sent to Tokyo to live with his father who is "
                    + "in the military. As soon as he arrives he discovers a new, fun but dangerous way of street racing in the underworld of the "
                    + "streets of Tokyo, Japan.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2006",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Skyfall",
                Poster: "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg",
                Description:
                    "When James Bond's (Daniel Craig's) latest assignment goes gravely wrong and Agents around the world are exposed, MI6 is "
                    + "attacked, forcing (M Dame Judi Dench) to relocate the agency. These events cause her authority and position to be challenged "
                    + "by Gareth Mallory (Ralph Fiennes), the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from "
                    + "both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows, aided only by field agent, Miss "
                    + "Eve Moneypenny (Naomie Harris), following a trail to the mysterious Tiago Rodriguez, a.k.a. Raoul Silva (Javier Bardem), "
                    + "whose lethal and hidden motives have yet to reveal themselves.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2012",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Spectre",
                Poster: "https://m.media-amazon.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                Description:
                    "A cryptic message from the past sends James Bond (Daniel Craig) on a rogue mission to Mexico City and eventually Rome, where "
                    + "he meets Lucia Sciarra (Monica Belluci), the beautiful and forbidden widow of an infamous criminal. Bond infiltrates a secret "
                    + "meeting and uncovers the existence of the sinister organisation known as S.P.E.C.T.R.E. Meanwhile, back in London, "
                    + "Max Denbigh (Andrew Scott), the new head of the Centre of National Security, questions Bond's actions and challenges the "
                    + "relevance of MI6, led by M (Ralph Fiennes). Bond covertly enlists Miss Eve Moneypenny (Naomie Harris) and Q (Ben Whishaw) to help him seek out Dr. Madeleine Swann (Léa Seydoux), the daughter of his old nemesis Mr. White (Jesper Christensen), who may "
                    + "hold the clue to untangling the web of S.P.E.C.T.R.E. As the daughter of the assassin, she understands Bond in a way most "
                    + "others cannot. As Bond ventures towards the heart of S.P.E.C.T.R.E., he learns a chilling connection between him and the "
                    + "enemy he seeks.",

                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2015",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Casino Royale",
                Poster: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
                Description:
                    "James Bond (Daniel Craig) goes on his first mission as a 00. Le Chiffre (Mads Mikkelsen) is a banker to the world's terrorists. "
                    + "He is participating in a poker game at Montenegro, where he must win back his money, in order to stay safe amongst the "
                    + "terrorist market. The boss of MI6, known simply as 'M' (Dame Judi Dench) sends Bond, along with Vesper Lynd Eva Green) to "
                    + "attend this game and prevent Le Chiffre from winning. Bond, using help from Felix Leiter (Jeffrey Wright), Rene Mathis "
                    + "(Giancarlo Giannini), and having Vesper pose as his partner, enters the most important poker game in his already dangerous "
                    + "career. But if Bond defeats Le Chiffre, will he and Vesper Lynd remain safe?",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2006",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Alice in Wonderland",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg",
                Description:
                    "Alice, an unpretentious and individual 19-year-old, is betrothed to a dunce of an English nobleman. At her engagement party, " + "she escapes the crowd to consider whether to go through with the marriage and falls down a hole in the garden after spotting "
                    + "an unusual rabbit. Arriving in a strange and surreal place called 'Underland,' she finds herself in a world that resembles "
                    + "the nightmares she had as a child, filled with talking animals, villainous queens and knights, and frumious bandersnatches. "
                    + "Alice realizes that she is there for a reason--to conquer the horrific Jabberwocky and restore the rightful "
                    + "queen to her throne.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2010",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "Peter Pan",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_SX300.jpg",
                Description:
                    "In stifling Edwardian London, Wendy Darling mesmerizes her brothers every night with bedtime tales of swordplay, "
                    + "swashbuckling, and the fearsome Captain Hook. But the children become the heroes of an even greater story, when Peter Pan "
                    + "flies into their nursery one night and leads them over moonlit rooftops through a galaxy of stars and to the lush jungles of "
                    + "Neverland. Wendy and her brothers join Peter and the Lost Boys in an exhilarating life--free of grown-up rules--while also "
                    + "facing the inevitable showdown with Hook and his bloodthirsty pirates.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2003",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_SX300.jpg",
                Description:
                    "Four children from the same family have to leave their town because of the bombings of WWII. A woman and a professor take the "
                    + "children to their house. While playing a game of hide-and-seek, the youngest member of the family, Lucy, finds a wardrobe to "
                    + "hide in. She travels back and back into the wardrobe and finds a place named Narnia. After going in twice, the four children "
                    + "go in together for the last time. They battle wolves, meet talking animals, encounter an evil white witch and meet a "
                    + "magnificent lion named Aslan. Will this be the end of their journey to Narnia or will they stay?",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2005",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "King Kong Lives",
                Poster: "https://m.media-amazon.com/images/M/MV5BNzAxNTQyMzYtMTg5Zi00OTA1LWEwYjEtNjg3ZmJhOWZiMzk3XkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg",
                Description:
                    "A giant ape King Kong, which was shot and fell off the World Trade Center tower, appears to be alive, but is in coma for 10 "
                    + "years and desperately needs a blood transfusion in order to have an artificial heart implanted. Suddenly, in the rainforest, "
                    + "another gigantic ape is found - this time a female. She is brought to the USA, and the heart is successfully implanted. But "
                    + "then King Kong, having sensed the female ape, breaks loose.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1986",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "Jumanji: The Next Level",
                Poster: "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
                Description:
                    "The gang is back but the game has changed. As they return to Jumanji to rescue one of their own, they discover that nothing is "
                    + "as they expect. The players will have to brave parts unknown and unexplored, from the arid deserts to the snowy mountains, in "
                    + "order to escape the world's most dangerous game.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2019",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "Prince of Persia: The Sands of Time",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTMwNDg0NzcyMV5BMl5BanBnXkFtZTcwNjg4MjQyMw@@._V1_SX300.jpg",
                Description:
                    "Set in the mystical lands of Persia, a rogue prince and a mysterious princess race against dark forces to safeguard an ancient " + "dagger capable of releasing the Sands of Time -- a gift from the gods that can reverse time and allow its possessor to rule "
                    + "the world.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2010",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "Spider-Man: Homecoming",
                Poster: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
                Description:
                    "A young Peter Parker/Spider-Man begins to navigate his newfound identity as the web-slinging super hero Spider-Man. "
                    + "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye "
                    + "of his new mentor Tony Stark. Peter tries to fall back into his normal daily routine - distracted by thoughts of proving "
                    + "himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, "
                    + "everything that Peter holds most important will be threatened.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2017",
                Genre: "Adventure",
                Actors: "7",
            },
            {
                Title: "Indiana Jones and the Kingdom of the Crystal Skull",
                Poster: "https://m.media-amazon.com/images/M/MV5BZDIzNzM5MDUtZmI5MC00NGQ5LWFlNzEtYzE3ODIxNDI3ZmNhXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_SX300.jpg",
                Description:
                    "During the Cold War, Soviet Agents watch Professor Henry 'Indiana' Jones, Jr. (Harrison Ford), when a young man brings him a "
                    + "coded message from an aged, demented colleague, Professor Harold Oxley (Sir John Hurt). Led by the brilliant Irina Spalko "
                    + "(Cate Blanchett), the Soviets tail Jones and the young man, Mutt Williams (Shia LeBeouf), to Peru. With Oxley's code, they "
                    + "find a legendary skull made of a single piece of quartz. If Jones can deliver the skull to its rightful place, all may be "
                    + "well. But if Irina takes it to its origin, she'll gain powers that could endanger the West. Aging professor and young buck "
                    + "join forces with a woman from Jones' past, Marion Ravenwood (Karen Allen), to face the dangers of the jungle, "
                    + "Russia, and the supernatural.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2008",
                Genre: "Adventure",
                Actors: "7",
            },
        ],

    },

    computed: {

        filteredWatchedMovie() {
            let filteredWatchedMovie = this.movie.filter((movie) => {
                return movie.Watched.toLowerCase().includes(this.searchInput.searchText.ToLowerCase()); 
             })

            let watchedMovies = filteredWatchedMovie.sort((a,b) => {
                return a.MoviePoster- b.MoviePoster;

            })

            return watchedMovies;

            ;
        },

        filteredNotWatchedMovie() {
            let filteredNotWatchedMovie= this.movie.filter((movie) => {
                return movie.NotWatched.toLowerCase().includes(this.searchInput.searchText.ToLowerCase()); 
             })

            let NotWatchedMovies = filteredNotWatchedMovie.sort((a,b) => {
                return a.MoviePoster- b.MoviePoster;

            })

            return NotwatchedMovies;

            ;
        },

        filteredMoviesComingSoon() {
            let filteredMoviesComingSoon= this.movie.filter((movie) => {
                return movie.CommingSoon.toLowerCase().includes(this.searchInput.searchText.toLowerCase());
            })

            let orderedMoviesComingSoon = filteredMoviesComingSoon.sort((a,b)=> {
                return a.MoviePoster- b.MoviePoster;
            })

            return orderedMoviesComingSoon;

            ;
        },

        filteredMoviesAvailable() {
            let filteredMoviesAvailable= this.movie.filter((movie) => {
                return movie.MoviesAvailable.toLowerCase().includes(this.searchInput.searchText.toLowerCase());
            })

            let orderedMoviesAvailable = filteredMoviesAvailable.sort((a,b)=> {
                return a.PMoviePoster- b.MoviePoster;
            })

            return orderedMoviesAvailable;


            ;
        }

    },

    methods: {
        function() {
            console.log('The value of myData is ' + this.myData);
            document.getElementById("output").innerHTHML = myVue.$data.myModel;
            console.log('The value of myData is ' + this.myData);
        },

        doSomething() {
            ;
        },

        addToWatchedList(event) {
            ;
        },

        addToNotWatchedList(event) {
            ;
        },

        addToComingSoon(event){
            ;
        }

        addToAvailableMovieList(event){
            ;
        }

    }
});