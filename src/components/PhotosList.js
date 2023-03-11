import PhotosListItem from './PhotosListItem';
import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';

function PhotosList({ album }) {
  console.log(album);
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  console.log(data);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const renderPhotos = () => {
    return data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div>Something went wrong</div>;
  } else {
    content = renderPhotos();
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={() => addPhoto(album)}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>
    </div>
  );
}

export default PhotosList;
