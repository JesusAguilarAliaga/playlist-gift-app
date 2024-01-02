import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css"

const AlbumsSlider = ({albums}) => {
  const [sliderRef] = useKeenSlider(
    {
      mode: "free",
      slides: {
        perView: 3.5,
        spacing: 16
      },
      breakpoints: {
        '(max-width: 530px)': {
          slides: {
            perView: 3,
            spacing: 10
          }
        },
        '(max-width: 450px)': {
          slides: {
            perView: 2.5,
            spacing: 6
          }
        },
        '(max-width: 375px)': {
          slides: {
            perView: 2.1,
            spacing: 8
          }
        }
      }
    },
  )


  return (
    <div className="keen-slider "  ref={sliderRef}>
      {albums.map((album) => (
        <div key={album.id} className="keen-slider__slide w-[132px] flex flex-col justify-center rounde">
          <img className='size-[123px] rounded-[16px]' src={album.images[1].url} alt="albumImg" />
          <h4 className='text-[12px] font-semibold truncate'>{album.name}</h4>
          <h4 className='text-[11px] text-white/60 truncate'>{album.artists.length > 1 ? `${album.artists[0].name}, ${album.artists[1].name}` : `${album.artists[0].name}`}</h4>
        </div>
      ))}
    </div>
  );
}
export default AlbumsSlider;
