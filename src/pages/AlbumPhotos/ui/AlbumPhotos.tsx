import { useGetPhotosByAlbumQuery } from "@/entities/photo";
import { useParams } from "react-router-dom";
import { PhotosList } from "@/entities/photo";

export const AlbumPhotosPage = () => {
  const { id } = useParams<{ id: string }>();
  const albumId = Number(id);

  const {
    data: photos = [],
    isLoading,
    isError,
  } = useGetPhotosByAlbumQuery(albumId);

  if (!albumId) return <div>Альбом не найден</div>;
  if (isLoading) return <div>Загрузка фотографий...</div>;
  if (isError) return <div>Ошибка загрузки данных</div>;

  return <PhotosList photos={photos} />;
};
