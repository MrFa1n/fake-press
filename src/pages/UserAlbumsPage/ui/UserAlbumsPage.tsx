import { useGetAlbumsByUserQuery } from "@/entities/album/api/albumsApi";
import type { Album } from "@/entities/album/model/types";
import { useGetUsersByIdQuery } from "@/entities/user/api/userApi";
import { GlassBlock } from "@/shared/ui/GlassBlock/GlassBlock";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { NavLink, useParams } from "react-router-dom";

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const {
    data: albums = [],
    isLoading,
    isError,
  } = useGetAlbumsByUserQuery(userId);

  const { data: user, isLoading: userLoading } = useGetUsersByIdQuery(userId);

  if (userLoading) return <div>Загрузка пользователя...</div>;
  if (isLoading) return <div>Загрузка альбомов...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <div>
      <h1>Альбомы пользователя {user?.name}</h1>
      <ItemList<Album>
        items={albums}
        keyExtractor={(album) => album.id}
        renderItem={(album) => (
          <GlassBlock key={album.id}>
            <NavLink to={`/albums/${album.id}/photos`}>
              📷 [{album.title}]
            </NavLink>
          </GlassBlock>
        )}
      />
    </div>
  );
};
