new Vue({
    el: '#app',
    data: {
        playlist: [
            {
                id: 1,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/albums/s188/188568/covers/1.50.jpg?du=1574129763',
                title: 'Stay Up',
                artist: 'All My Friends Hate Me',
                songLength: '3:49',
                musicPath: 'https://ryocv.online/music/mp3/All_My_Friends_Hate_Me_-_Stay_Up.mp3'
            },
            {
                id: 2,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1715/1715114/covers/1.50.jpg?du=1578881763',
                title: 'Let You Go',
                artist: 'Double-F The King',
                songLength: '3:08',
                musicPath: 'https://ryocv.online/music/mp3/Double-F_The_King_-_Let_You_Go.mp3'
            },
            {
                id: 3,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1721/1721181/covers/1.50.jpg?du=1578622677',
                title: 'I′m Gone',
                artist: 'Hands of Attrition',
                songLength: '4:46',
                musicPath: 'https://ryocv.online/music/mp3/Hands_of_Attrition_-_I_m_Gone.mp3'
            },
            {
                id: 4,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1739/1739045/covers/1.50.jpg?du=1582644433',
                title: 'DEJAVU',
                artist: 'jaye',
                songLength: '3:03',
                musicPath: 'https://ryocv.online/music/mp3/jaye_-_DEJAVU.mp3'
            },
            {
                id: 5,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1745/1745733/covers/1.50.jpg?du=1584737637',
                title: 'Rebels With A Cause',
                artist: 'RENAE',
                songLength: '3:34',
                musicPath: 'https://ryocv.online/music/mp3/RENAE_-_Rebels_With_A_Cause.mp3'
            },
            {
                id: 6,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1719/1719234/covers/1.50.jpg?du=1582093955',
                title: 'Skyline',
                artist: 'Samie Bower',
                songLength: '2:53',
                musicPath: 'https://ryocv.online/music/mp3/Samie_Bower_-_Skyline.mp3'
            },
            {
                id: 7,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1694/1694330/covers/1.50.jpg?du=1571534225',
                title: 'Moment of Escape',
                artist: 'Square a Saw',
                songLength: '3:17',
                musicPath: 'https://ryocv.online/music/mp3/Square_a_Saw_-_Moment_of_Escape.mp3'
            },
            {
                id: 8,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1691/1691507/covers/1.50.jpg?du=1575442794',
                title: 'Coffee At Midnight(Acoustic)',
                artist: 'Lewis',
                songLength: '3:07',
                musicPath: 'https://ryocv.online/music/mp3/Lewis_-_Coffee_At_Midnight__Acoustic_.mp3'
            },
            {
                id: 9,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1721/1721344/covers/1.50.jpg?du=1579015351',
                title: 'Milkman',
                artist: 'Summer Ash',
                songLength: '3:15',
                musicPath: 'https://ryocv.online/music/mp3/Summer_Ash_-_Milkman.mp3'
            },
            {
                id: 10,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1696/1696907/covers/1.50.jpg?du=1572574581',
                title: 'Luck′s All Gone',
                artist: 'The Devil Music Co.',
                songLength: '3:10',
                musicPath: 'https://ryocv.online/music/mp3/The_Devil_Music_Co._-_Luck_s_All_Gone.mp3'
            },
            {
                id: 11,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1693/1693256/covers/1.50.jpg?du=1571447762',
                title: 'Amina',
                artist: 'P Steve Officiel',
                songLength: '3:25',
                musicPath: 'https://ryocv.online/music/mp3/P_Steve_Officiel_-_Amina.mp3'
            },
            {
                id: 12,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1679/1679859/covers/1.50.jpg?du=1567041401',
                title: '(I Don′t Even) Need Your Love',
                artist: 'Chalk CIty',
                songLength: '3:25',
                musicPath: 'https://ryocv.online/music/mp3/Chalk_CIty_-__I_Don_t_Even__Need_Your_Love.mp3'
            },
            {
                id: 13,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/albums/s191/191688/covers/1.50.jpg?du=1582730990',
                title: '03 Lie, Cry or Die',
                artist: 'Strontium',
                songLength: '3:23',
                musicPath: 'https://ryocv.online/music/mp3/Strontium_-_03_Lie__Cry_or_Die.mp3'
            },
            {
                id: 14,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1690/1690826/covers/1.50.jpg?du=1570497550',
                title: 'Feelin Dangerous',
                artist: 'Dacian Miron',
                songLength: '3:36',
                musicPath: 'https://ryocv.online/music/mp3/Dacian_Miron_-_Feelin_Dangerous.mp3'
            },
            {
                id: 15,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1687/1687211/covers/1.50.jpg?du=1575442767',
                title: 'Wish in the Wind',
                artist: 'STARMOB',
                songLength: '2:59',
                musicPath: 'https://ryocv.online/music/mp3/STARMOB_-_Wish_in_the_Wind.mp3'
            },
            {
                id: 16,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/albums/s186/186136/covers/1.50.jpg?du=1562721534',
                title: 'No Prayers',
                artist: 'Pokki DJ',
                songLength: '3:21',
                musicPath: 'https://ryocv.online/music/mp3/Pokki_DJ_-_No_Prayers.mp3'
            },
            {
                id: 17,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1657/1657646/covers/1.50.jpg?du=1575443067',
                title: 'Whenever is the Right Time',
                artist: 'Banana Cream',
                songLength: '3:25',
                musicPath: 'https://ryocv.online/music/mp3/Banana_Cream_-_Whenever_is_the_Right_Time.mp3'
            },
            {
                id: 18,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1662/1662157/covers/1.50.jpg?du=1572880612',
                title: 'Force',
                artist: 'Wordsmith',
                songLength: '3:05',
                musicPath: 'https://ryocv.online/music/mp3/Wordsmith_-_Force.mp3'
            },
            {
                id: 19,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/albums/s181/181920/covers/1.50.jpg?du=1547720144',
                title: 'Wild Heart',
                artist: 'Omonoko',
                songLength: '4:02',
                musicPath: 'https://ryocv.online/music/mp3/Omonoko_-_Wild_Heart.mp3'
            },
            {
                id: 20,
                isPlay: false,
                path: 'https://cdn-img.jamendo.com/track/s1615/1615623/covers/1.50.jpg?du=1548641885',
                title: 'Mourning Day',
                artist: 'SadMe',
                songLength: '3:36',
                musicPath: 'https://ryocv.online/music/mp3/SadMe_-_Mourning_Day.mp3'
            }
        ],
        playId: 0,
        playTitle: '',
        playArtist: '',
        musicPath: ''
    },
    methods: {
        loadMusic() {
            let music = document.querySelector(".musicAudio");
            music.load();
            return music;
        },
        playMusic(id) {
            if (this.playlist.length < id) {
                this.playId = 0;
                this.playTitle = '';
                this.playArtist = '';
                this.musicPath = '';
                this.loadMusic();
                this.setBackColor();
                return;
            }

            if(this.playId === id) {
                return;
            }

            this.playlist.forEach(element => {
                if(element.id === id) {
                    this.playId = id;
                    this.playTitle = element.title;
                    this.playArtist = element.artist;
                    this.musicPath = element.musicPath;
                }
            });

            let music = this.loadMusic();
            music.play().then(_ => {
                // play
            }).catch(error => {
                // pause
            });
            this.setBackColor();
        },
        setBackColor() {
            this.playlist.forEach(element => {
                if(element.id === this.playId) {
                    element.isPlay = true;
                } else {
                    element.isPlay = false;
                }
            });
        }
    }
})
