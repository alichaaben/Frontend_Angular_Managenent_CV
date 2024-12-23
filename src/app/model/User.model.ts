export interface UserMdl {
  id: string;
  userName: string;
  email: string;
  telephone: string;
  motDePasse: string;
  profileImage: File | null;
  roleName: string;
  imageUrl?: string;
}
