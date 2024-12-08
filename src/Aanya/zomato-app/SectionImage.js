export function SectionImage() {

let BeImages=[{url:"https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810207.png"},
  {url:"https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810207.png"},
  {url:"https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810207.png"}];
 
  let Myimages=[];
  for(let i=0;i<BeImages;i++){
    let item=BeImages[i];
    Myimages.push(<Image myurl={item.url}/>);
  }

    return (
      <div>
        {Myimages} //arr of images
      </div>
    );
  }