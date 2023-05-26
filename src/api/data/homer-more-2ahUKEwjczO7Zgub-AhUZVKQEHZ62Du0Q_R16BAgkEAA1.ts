import { SearchResponse } from "../types";

const response: SearchResponse = {
    type: "SearchResponse",
    bundles: {
        "c": {
            // c : common bundle
            "ns": "asimo.dpademo.bundles.common",
            "src": "./dist-bundles/bundle-common.js" // should be a versioned URL
        },
        "si": {
            // bundle simulating an A/B test
            "ns": "asimo.dpademo.bundles.sideimg",
            "src": "./dist-bundles/bundle-sideimg.js" // should be a verstioned URL
        }
    },
    popoverUpdates: [
        {
            action: "replace",
            content: [
                ["*si:dialog", {
                    "header": ["*si:imgBlock", {
                        "header": {
                            "logo": ["*c:img", { "height": 20, "width": 20, "src": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.ladepeche.fr&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2" }],
                            "content": ["#a", { "href": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ladepeche.fr%2Farticle%2F2013%2F10%2F02%2F1722143-simpson-homer-va-mourir-nouvelle-saison.html&psig=AOvVaw3myJCkAh4gHF1wq2VzPbhK&ust=1685196292291000&source=images&cd=vfe&ved=0CAQQjB1qFwoTCIjsv8WTk_8CFQAAAAAdAAAAABAW" }, "La Depeche"]
                        },
                        "img": {
                            "href": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ladepeche.fr%2Farticle%2F2013%2F10%2F02%2F1722143-simpson-homer-va-mourir-nouvelle-saison.html&psig=AOvVaw2n6axuaUzIyn_BidaPzkFk&ust=1685179512429000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJC9uIPVkv8CFQAAAAAdAAAAABAK",
                            "src": "https://images.ladepeche.fr/api/v1/images/view/5c2e06d98fe56f0b27572b11/large/image.jpg",
                            "width": 568,
                            "height": 321
                        },
                        "title": "Les Simpson : Homer va-t-il mourir dans la nouvelle saison ..."
                    }],

                }, ["*si:imgGroup", {
                    "title": "Related Content",
                    "images": [
                        {
                            "title": "The Untold Truth Of Homer Simpson",
                            "width": 174, "height": 97,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.looper.com%2Fimg%2Fgallery%2Fthe-untold-truth-of-homer-simpson%2Fintro-1664994717.jpg&tbnid=Za2wksOh-dPuTM&vet=10CAIQxiAoAGoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fwww.looper.com%2F1040215%2Fthe-untold-truth-of-homer-simpson%2F&docid=klXNt20BiBa79M&w=780&h=438&itg=1&q=homer%20simpson&ved=0CAIQxiAoAGoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxgsMYB6FED1QxUzlC28ClyP0vGFLOVYGUaweVV8iP8nqzGMeb7x5RY3feqf_3ByC8Hw&usqp=CAU"
                        }, {
                            "title": "GPS Maker TomTom Gives Homer Simpson a sense of direction",
                            "width": 1, "height": 1,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fblogs%2Falltechconsidered%2Fimages%2F2009%2Fjune%2Ftomtom_homer_200-2bb511cae97bd111218e3636809b2ff057c90267-s1100-c50.jpg&tbnid=ipp_rrLN9iCw2M&vet=10CAQQxiAoA2oXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fwww.npr.org%2Fsections%2Falltechconsidered%2F2009%2F06%2Fhomer_drives_you_home.html&docid=XgRHVvyV5Z4BWM&w=200&h=197&itg=1&q=homer%20simpson&ved=0CAQQxiAoA2oXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrQBxLdNEufX1W1Sj_q2KpP2KSxWhB0Yf1SYZghypu6qAMRWQmYvSQaIByifNcLbOTrU&usqp=CAU"
                        }, {
                            "title": "Homer Simpson",
                            "width": 174, "height": 171,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.miraheze.org%2Floathsomecharacterswiki%2Fthumb%2F7%2F70%2FScreenshot_2021-03-23_7.33.58_AM.png%2F300px-Screenshot_2021-03-23_7.33.58_AM.png&tbnid=aIiCfsqE-U7YPM&vet=10CAYQxiAoB2oXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Floathsomecharacters.miraheze.org%2Fwiki%2FHomer_Simpson_%2528seasons_11-30%2529&docid=7cU9N3YGH5K4ZM&w=300&h=385&itg=1&q=homer%20simpson&ved=0CAYQxiAoB2oXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1GMQZyFk3x64WmpAhOgwtcwyVGamGb2IomAChz0oBosUyIDprGZZR3mpqc99hADZBEc&usqp=CAU"
                        }, {
                            "title": "What Homer Simpson's 100+ jobs tells us about America's middle class",
                            "width": 174, "height": 233,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F5pg2mS4S5FIhTMwQzRN6duhCBOE%3D%2F0x0%3A1200x798%2F1400x788%2Ffilters%3Afocal(504x303%3A696x495)%3Aformat(png)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F50682439%2Fhomer-cover.0.png&tbnid=ROYU89rVII6rTM&vet=10CAgQxiAoCmoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fwww.vox.com%2F2016%2F9%2F6%2F12752476%2Fthe-simpsons-homer-middle-class&docid=Q-KIHaw92Fq-mM&w=1400&h=788&itg=1&q=homer%20simpson&ved=0CAgQxiAoCmoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSvnwi08BBH-r9lMbllHAKE-gjkfsH5wSCfpY9FMRa4ZCS5ywv5QrPyRbWtZp381uDzo&usqp=CAU"
                        }, {
                            "title": "Homer Simpson will broadcast live",
                            "width": 174, "height": 97,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.entrepreneur.com%2Fcontent%2F3x2%2F2000%2F20160217154151-homer-simpson.jpeg%3Fformat%3Dpjeg%26auto%3Dwebp&tbnid=dE-shdo7o9GgIM&vet=10CAoQxiAoAWoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fwww.entrepreneur.com%2Fbusiness-news%2Fhomer-simpson-will-broadcast-live-with-some-motion-capture%2F270929%23!&docid=DNZ_mBQhV8wxoM&w=2000&h=1334&itg=1&q=homer%20simpson&ved=0CAoQxiAoAWoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpoTVeiqe_D_hl7haj0k3Dcr-7aVQ5hV1fFqyIG7EISucOwCTKm4BqYChUpv6rULi_3k&usqp=CAU"
                        }, {
                            "title": "Simpson's Puts Homer on Death's Door",
                            "width": 174, "height": 115,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.hollywoodreporter.com%2Fwp-content%2Fuploads%2F2011%2F10%2Fdoh_a.jpg%3Fw%3D2000%26h%3D1126%26crop%3D1&tbnid=m3dQxHYYmI8kJM&vet=10CAwQxiAoBGoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fwww.hollywoodreporter.com%2Ftv%2Ftv-news%2Fsimpsons-puts-homer-deaths-door-721455%2F&docid=4FQjE7RVf-wJ_M&w=648&h=365&itg=1&q=homer%20simpson&ved=0CAwQxiAoBGoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wneZcqX_QhWcrgMn7r1Th1jSQcCDyYvpa3CDk0Onu7WyKBLCjmXenvUlJ6Ka8exs78s&usqp=CAU"
                        }, {
                            "title": "Die Simpsons: Homer Simpson bekommt neue deutsche Stimme",
                            "width": 174, "height": 97,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.prod.www.spiegel.de%2Fimages%2F55cd40a8-0001-0004-0000-000000927699_w1200_r1_fpx44.98_fpy40.6.jpg&tbnid=pwvDO81dzZVl-M&vet=10CA4QxiAoBWoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fwww.spiegel.de%2Fkultur%2Ftv%2Fdie-simpsons-homer-simpson-bekommt-neue-deutsche-stimme-a-1110031.html&docid=KbDoGC1icVqckM&w=1200&h=1200&itg=1&q=homer%20simpson&ved=0CA4QxiAoBWoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9LYU1PB-O8UqhRCIyoC5hK7lEjzVhh86qtgnn8O3be7RhyrqydYAfm-FJfELMUjiKB4&usqp=CAU"
                        }, {
                            "title": "Homer Simpson: Das OberHaupt der Familie Simpson",
                            "width": 174, "height": 174,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdiesimpsons.de%2Fmedia%2Flightbox%2Fhomer-simpson-charaktere-simpsons.jpg&tbnid=TZEiled3ArmLyM&vet=10CBAQxiAoCGoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fdiesimpsons.de%2Fdie-simpsons%2Fcharaktere%2Fhomer-simpson%2F&docid=lwzObVyZaP1sBM&w=800&h=533&itg=1&q=homer%20simpson&ved=0CBAQxiAoCGoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANoVthXlLn_ioAJhniSeXHWeFNrEcYXxGOm8vA7iLR1xnMi3-QrCG4Dv564wGH1s8mEk&usqp=CAU"
                        }, {
                            "title": "Quadro Homer Simpson",
                            "width": 174, "height": 139,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fidealquadros.com.br%2Fwp-content%2Fuploads%2F2021%2F05%2F2263-homer-simpson.png&tbnid=vcSqVOyYoFtaUM&vet=10CBIQxiAoC2oXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fidealquadros.com.br%2Fquadro-homer-simpson-2263%2F&docid=KaS7wkk_A9LZiM&w=1000&h=1000&itg=1&q=homer%20simpson&ved=0CBIQxiAoC2oXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGlTm2wu5ddDsjVEmqFsfj9CQC_wDf6G5_FcJ9e0tqg2pm7kvAOHPevOpBlnTniAPSTm4&usqp=CAU"
                        }, {
                            "title": "Homer Simpson | Heroes Wiki",
                            "width": 174, "height": 308,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fp__%2Fimages%2F3%2F3c%2FHomerSimpson.png%2Frevision%2Flatest%3Fcb%3D20210813010304%26path-prefix%3Dprotagonist&tbnid=GRyHiOdr0nOqjM&vet=10CBQQxiAoAmoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fhero.fandom.com%2Fwiki%2FHomer_Simpson&docid=066d-2itq72MRM&w=1080&h=1920&itg=1&q=homer%20simpson&ved=0CBQQxiAoAmoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJggBwtJve7nBREqZzdLTJRZJbT9ZdA_iHFiKKVQldHiPbqkJ-k7wejQLXk9l9SmJOEc&usqp=CAU"
                        }, {
                            "title": "The wit, wisdom and humanity of Homer Simpson",
                            "width": 174, "height": 129,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.irishexaminer.com%2Fcms_media%2Fmodule_img%2F4908%2F2454350_13_seoimage4x3_766377.jpg&tbnid=kz3ZxUFDObszAM&vet=10CBYQxiAoBmoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fwww.irishexaminer.com%2Flifestyle%2Fartsandculture%2Farid-40286582.html&docid=3km13GLbTKxE4M&w=1067&h=800&itg=1&q=homer%20simpson&ved=0CBYQxiAoBmoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8u5mtQgUrG8HT3Qz-KmZTX-NlhC6goe9h3ikSXwUpjmRzk4dfNfEJDKoIU5aKHZ9Pt4&usqp=CAU"
                        }, {
                            "title": "Homer Simpson blamed for obesity problem",
                            "width": 174, "height": 139,
                            "href": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F624%2Fmcs%2Fmedia%2Fimages%2F78473000%2Fjpg%2F_78473072_gettyhomer.jpg&tbnid=VII6RC3FhuzE7M&vet=10CBgQxiAoCWoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0..i&imgrefurl=https%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fnewsbeat-29737867&docid=a_NC6VQ3_NKA_M&w=624&h=500&itg=1&q=homer%20simpson&ved=0CBgQxiAoCWoXChMIkL24g9WS_wIVAAAAAB0AAAAAEA0",
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uZ9scEAzHM8jaaNBaVN6UFyMueNZhEAEJZTB9ZlvZi3sEzjJxGA1JlKXMue9J_IKCNc&usqp=CAU"
                        }

                    ]
                }],

                    ["*btn.mt-5", {
                        "href": "https://www.google.com/search?rlz=1C5CHFA_enFR857FR857&sxsrf=APwXEdcYnZJlKJpHOrmzCBwe330HRQ8fMA:1683559185890&q=Homer+Simpson&stick=H4sIAAAAAAAAAONgFuLQz9U3yDA1MVWCs7QEgzNTUssTK4v9UitKgktSC4p_MYoFpOYX5KQqJOYU5ysUpyYWJWcopOUXLWLl9cjPTS1SCM7MLSjOz9vByniLTZKh5Nm1WcKLVmXcWbDt4MRbXi31YbWzRDTbEgG1ZONfcQAAAA&sa=X&ved=2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Q4qYDegQIExAG"
                    },
                        "See more", ["*icon", { "type": "r-arrow" }]
                    ],

                    ["*c:accordion", {
                        "title": "Related searches",
                        "sections": [
                            {
                                "title": "cartoon homer simpson",
                                "iconSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQauPQNvcT40sP25dqg5suo4QXDx1A7u4WhilvzvQ1DM9GLHWYBxEAgA&usqp=CAU",
                                "key": "2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Qq7kBKAB6BAhiEBA",
                                "content": [
                                    "Under construction"
                                ]
                            },
                            {
                                "title": "homer simpson doh",
                                "iconSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_M3NFyQBYlU0kd_gInE6O-N2-ps272MYtrY18oI3ctz5_36quAhBcc4&usqp=CAU",
                                "key": "2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Qq7kBKAB6BAhiEBB",
                                "content": [
                                    "Under construction"
                                ]
                            },
                            {
                                "title": "realistic homer simpson",
                                "iconSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qohSSJLjotD6QyX3MnMuJwvK30YR6VWjEwCBbt7ZBqFzPkd7J__-TC8&usqp=CAU",
                                "key": "2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Qq7kBKAB6BAhiEBC",
                                "content": [
                                    "Under construction"
                                ]
                            },
                            {
                                "title": "homer simpson drawing",
                                "iconSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv1xb5kqjgRaeZXtGagL57TTDYYAXvl25vdgge-UVYJWmSQ-EDvkB4Ck&usqp=CAU",
                                "key": "2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Qq7kBKAB6BAhiEBD",
                                "content": [
                                    "Under construction"
                                ]
                            }
                        ]
                    }],
                ]
            ]
        }
    ]
}

export default response;
