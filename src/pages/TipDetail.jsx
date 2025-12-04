import { useParams } from "react-router-dom";

export default function TipDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen px-6 flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">tip {id}</h1>
      <p className="text-gray-700 leading-relaxed">
        Ini adalah deskripsi detail untuk Tip {id}.  
        Kamu bisa menambahkan konten sesuai desain:  
        paragraf, penjelasan, cara melakukan daur ulang, dll.
      </p>
    </div>
  );
}
