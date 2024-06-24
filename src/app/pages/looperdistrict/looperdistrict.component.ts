import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KERALA_DISTRICTS } from '../../district-data';
import { NgFor, NgIf } from '@angular/common';
import{District} from '../../district-data';

@Component({
  selector: 'app-looperdistrict',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './looperdistrict.component.html',
  styleUrl: './looperdistrict.component.scss'
})


export class LooperdistrictComponent {
  constructor(private activatedRoute:ActivatedRoute, private router:Router){}
  district: any;



  ngOnInit(){
    const districtName:any = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(districtName);
    
    this.district = KERALA_DISTRICTS.filter((dist:any)=>{
      if(dist.name==districtName)
        return dist;
    })[0];
    if(this.district==undefined){
      this.router.navigate(['/distritcs'])
    }
    console.log(this.district);
    
  }


  }

