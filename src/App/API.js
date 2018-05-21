const API = {
  objects: [
    {
      title: 'Arachnoquake',
      description:
        'An unusual earthquake in South Louisiana creates an eerie fissure and releases a legion a mutant ground-dwelling spiders that attack the city of New Orleans.',
      credits: ['Directed by Griff First', 'Edited by Misty Talley', 'Written by Eric Frosberg', 'Active Entertainment'],
      year: '2012',
      key: 'arachnoquake',
      imagePath: 'Aquake.png',
      imagePath2: 'Aquake2.png',
      imagePath3: 'Aquake3.png'
    },
    {
      title: 'Christmas in Mississippi',
      description:
        'Photographer Holly Logan returns to her hometown of Gulfport, Mississippi for Christmas. She volunteers to help with the local Christmas festival, but soon has second thoughts when she discovers that the festival is run by her high school sweetheart, Mike.',
      credits: ['Directed by Emily Moss Wilson', 'Edited by Misty Talley', 'Written by Marcy Holland', 'Active Entertainment'],
      year: '2017',      
      key: 'mississippi',
      imagePath: 'CIM.png',
      imagePath2: 'CIM2.png',
      imagePath3: 'CIM3.png'
    },
    {
      title: 'Jeepers Creepers 3',
      description:
        'The third film of the popular horror franchise, Jeepers Creepers 3 takes place in the familiar Poho County where Sheriff Dan Tashtego and his team of Creeper Hunters enlist the help of local Police Officer Davis Tubbs to help stop the monster’s eating spree.',
      credits: ['Directed by Victor Salva', 'Edited by Misty Talley', 'Written by Victor Salva', 'Infinity Films'],
      year: '2017',
      key: 'jeepers',
      imagePath: 'Jeepers.png',
      imagePath2: 'Jeepers2.png',
      imagePath3: 'Jeepers3.png'
    },
    {
      title: 'Mississippi River Shark',
      description:
        'A small Mississippi town is turned upside down when their annual fishing tournament gets crashed by a group of angry sharks. It’s up to a group of locals and the tournament’s celebrity guest, Jason London, to take out the ravenous invaders.',
      credits: ['Directed by Misty Talley', 'Edited by Misty Talley', 'Written by Marcy Holland & Greg Mitchell', 'Active Entertainment'],
      year: '2017',
      key: 'rivershark',
      imagePath: 'MRS.png',
      imagePath2: 'MRS2.png',
      imagePath3: 'MRS3.png'
    },
    {
      title: 'Ozark Shark',
      description:
        'A picturesque family vacation to the Ozarks goes sideways when a group of bull sharks show up just in time for the big fireworks festival that the town holds every year. It’s up the vacationing Molly and her family to stop the onslaught with the help of a survivalist local named Jones.',
      credits: ['Directed by Misty Talley', 'Edited by Misty Talley', 'Written by Marcy Holland & Greg Mitchell', 'Active Entertainment'],
      year: '2016',
      key: 'ozark',
      imagePath: 'Oshark.png',
      imagePath2: 'Oshark2.png',
      imagePath3: 'Oshark3.png'
    },
    {
      title: 'The Parallax Theory',
      description:
        'Jonathan, a young physicist, who alone holds the knowledge of an imminent cataclysmic meteor strike. As he tirelessly warns the world of impending doom, he is ostracized by those who fear the truth.',
      credits: ['Directed by Sawyer Hartman', 'Edited by Misty Talley', 'Written by Sawyer Hartman', 'New Form Digital'],
      year: '2015',
      key: 'parallax',
      imagePath: 'Parallax.png',
      imagePath2: 'Parallax2.png',
      imagePath3: 'Parallax3.png'
    },
    {
      title: 'Secrets in Suburbia',
      description:
        'After discovering that one of her three best friends and her husband are plotting to murder her and steal her family fortune, Gloria, an otherwise kind-hearted housewife exacts a deadly revenge.',
      credits: ['Directed by Damián Roman', 'Edited by Misty Talley', 'Written by Damián Roman', 'Sunshine Films Production'],
      year: '2016',
      key: 'suburbia',
      imagePath: 'Secrets.png',
      imagePath2: 'Secrets2.png',
      imagePath3: 'Secrets3.png'
    },
    {
      title: 'Santa Jaws',
      description:
        'A teenage comic book artist, Cody, and his ragtag group of friends take on a supernatural Christmas Shark that he is summoned to life. To save his family they must take to the water and fight Santa Jaws head-on with an arsenal of Christmas weapons and a magic pen.',
      credits: ['Directed by Misty Talley', 'Edited by Misty Talley', 'Written by Jake Kiernan', 'Active Entertainment Film'],
      year: '2018',
      key: 'santa',
      imagePath: 'Sjaws.png',
      imagePath2: 'Sjaws2.png',
      imagePath3: 'Sjaws3.png'
    },
    {
      title: 'Ten to Sing',
      description:
        'When Pearl, an elderly shut-in, builds up the courage to leave her house she gets locked outside. She quickly realizes that she’s the last person on Earth and then sets out on an unexpected journey to find signs of life.',
      credits: ['Directed by Misty Talley', 'Edited by Misty Talley', 'Written by Rebecca Flores', 'Fable House Film'],
      year: '2014',
      key: 'tentosing',
      imagePath: 'TenToSing.png',
      imagePath2: 'TenToSing2.png',
      imagePath3: 'TenToSing3.png'
    },
    {
      title: 'T-Galop: A Lousiana Horse Story',
      description:
        'Creole cowboys, Cajun jockeys, Cotton Knights and Mardi Gras revelers reveal the long history and blend between Creoles and Cajuns and the horses they love. T-Galop romps playfully across South Louisiana bearing witness to a modern horse culture that was born many centuries ago.',
      credits: ['Directed by Conni Castille', 'Edited by Misty Talley', 'Written by Conni Castille', 'T-Tiny Entertainment Film'],
      year: '2012',
      key: 'tgalop',
      imagePath: 'Tgalop.png',
      imagePath2: 'Tgalop2.png',
      imagePath3: 'Tgalop3.png'
    },
    {
      title: 'The Tiger and The Oak',
      description:
        'This documentary explores the history, ecology, and future of the once inhabited land, Cheniere au Tigre through the eyes of Architecture professor Onezieme Mouton and his students.',
      credits: ['Directed by Misty Talley', 'Edited by Eva K. Morgan', 'Written by Misty Talley', 'Fable House Film'],
      year: '2019',
      key: 'tiger',
      imagePath: 'Toak.png',
      imagePath2: 'Toak2.png',
      imagePath3: 'Toak3.png'
    },
    {
      title: 'Zombie Shark',
      description:
        'A perfect weekend getaway for four friends turns into a race to survive when they have to fight an experimental monster shark and his legion of zombie shark minions.',
      credits: ['Directed by Misty Talley', 'Edited by Misty Talley', 'Written by Greg Mitchell', 'Active Entertainment'],
      year: '2015',
      key: 'zombie',
      imagePath: 'Zshark.png',
      imagePath2: 'Zshark2.png',
      imagePath3: 'Zshark3.png'
    }
  ],
  all: function() {
    return this.objects;
  },
  get: function(id) {
    const isFeature = p => p.key === id;
    return this.objects.find(isFeature);
  },
  getImagePaths: function() {
    const imgArray = [];
    this.objects.forEach(obj => imgArray.push(obj.imagePath));
    return imgArray;
  }
};

export default API;
