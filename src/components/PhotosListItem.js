import { GoTrashcan } from 'react-icons/go';
import { useDeletePhotoMutation } from '../store';

function PhotosListItem({ photo }) {
  const [deletePhoto, deletePhotoResults] = useDeletePhotoMutation();

  return (
    <div className="relative cursor-pointer m-2" onClick={() => deletePhoto(photo)}>
      <img className="h-20 w-20" src={photo.url} alt="random" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotosListItem;
