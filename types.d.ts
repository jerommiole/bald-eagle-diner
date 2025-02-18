interface Category {
  id: string;
  name: string;
}

interface MenuItem {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

interface MerchItem {
  id: number;
  name: string;
  imageUrl: string;
}

interface GalleryItem {
  src: string;
  alt: string;
  link: string;
  span?: string;
}
