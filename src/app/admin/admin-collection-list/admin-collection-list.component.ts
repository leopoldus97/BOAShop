import { Component, OnInit } from '@angular/core';
import {Collection} from '../../shared/models/collection';
import {CollectionService} from '../../shared/services/collection-service/collection.service';

@Component({
  selector: 'app-admin-collection-list',
  templateUrl: './admin-collection-list.component.html',
  styleUrls: ['./admin-collection-list.component.scss']
})
export class AdminCollectionListComponent implements OnInit {

  allCollections: Collection[];

  constructor( private service: CollectionService) { }

  ngOnInit() {
    document.getElementById('btn-all-products').setAttribute('style', '');
    document.getElementById('btn-add-product').setAttribute('style', '');
    document.getElementById('btn-new-collection').setAttribute('style', '');
    document.getElementById('btn-collection-list').setAttribute('style',
      'background-color:black; color: white; width:200px');
    this.service.getCollections().subscribe(data => this.allCollections = data);
  }

}
