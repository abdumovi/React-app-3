const Data = [
  {
    title:'MacBook Air 13-inch',
    subtitle:'M1/16/1tb Space Gray',
    ram:[
      {
        ime:'8GB',
        className:"radios ram-rad",
        type:"radio", id:"ram8",
        name:"ram",
        value:'5000000',
        data:'ram',
        defaultChecked:true,
        lables:{
          className:"radio-style marlab ram radion", 
          id:"rams8",  
          htmlFor:"ram8"
        }
      },
      {
        ime:'16GB',
        className:"radios ram-rad",
        type:"radio", id:"ram16",
        name:"ram",
        data:'ram',
        value:'7000000',
        lables:{
          className:"radio-style marlab ram radion", 
          id:"ram16", 
          htmlFor:"ram16"
        }
      },
    ],
    mem:[
      {
        ime:'256GB',
        className:"radios",
        type:"radio",
        id:"mem256",
        name:"mem",
        data:'mem',
        value:'5000000',
        defaultChecked:true,
        lables:{
          className:"radio-style marlab hard radion" ,
          htmlFor:"mem256"
        }
      },
      {
        ime:'512GB',
        className:"radios",
        type:"radio",
        id:"mem512",
        value:'8000000',
        data:'mem',
        name:"mem",
        lables:{
          className:"radio-style marlab hard radion" ,
          htmlFor:"mem512"
        }
      },
      {
        ime:'1TB',
        className:"radios",
        type:"radio",
        id:"mem1",
        data:'mem',
        value:'9000000',
        name:"mem",
        lables:{
          className:"radio-style marlab hard radion",
          htmlFor:"mem1"
        }
      },
    ],
    rang:[
      {
        ime:'Tilla rang',
        className:"radios radio__color",
        type:"radio",
        id:"color-gold",
        name:"color",
        defaultChecked:true,
        lables:{
          className:"radio-color marlab color radion radio-style",
          htmlFor:"color-gold"
        },
        div:{
          class:"color-gold",
        }
      },
      {
        ime:'Kumush rang',
        className:"radios radio__color",
        type:"radio",
        id:"color-silver",
        name:"color",
        lables:{
          className:"radio-color marlab color radion radio-style",
          htmlFor:"color-silver",
        },
        div:{
          class:"color-silver",
        }
      },
      {
        ime:'Kosmik rang',
        className:"radios radio__color",
        type:"radio",
        id:"color-space",
        name:"color",
        lables:{
          className:"radio-color marlab color radion radio-style",
          htmlFor:"color-space",
        },
        div:{
          class:"color-space",
        }
      },
    ],
  }
]
export default Data