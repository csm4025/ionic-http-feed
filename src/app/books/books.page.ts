import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  items = [
    {
      'artistName': 'John Sandford',
      'id': '1276011760',
      'releaseDate': '2018-04-24',
      'name': '<strong>Twisted Prey</strong>',
      'kind': 'epubBook',
      'artistId': '20888342',
      'artistUrl': 'https://itunes.apple.com/us/artist/john-sandford/20888342?mt=11',
      // tslint:disable-next-line:max-line-length
      'artworkUrl100': 'https://is4-ssl.mzstatic.com/image/thumb/Publication118/v4/96/b6/71/96b671bc-b8a1-2e3f-e90e-b61aabbc43ff/9780735217362.jpg/200x200bb.png',
      'genres': [
        {
          'genreId': '9032',
          'name': 'Mysteries & Thrillers',
          'url': 'https://itunes.apple.com/us/genre/id9032'
        },
        {
          'genreId': '38',
          'name': 'Books',
          'url': 'https://itunes.apple.com/us/genre/id38'
        }
      ],
      'url': 'https://itunes.apple.com/us/book/twisted-prey/id1276011760?mt=11'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
