import Link from "next/link";


// 더미 데이터
const mockVideos = [
  { id: 1, title: "백룸 (The Backrooms)", author: "Kane Pixels", thumbnail: "https://images.unsplash.com/photo-1621532467554-4a572a1df799?w=500" },
  { id: 2, title: "SCP-087 계단", author: "SCP Foundation", thumbnail: "https://images.unsplash.com/photo-1517482329241-1f91deee3ba9?w=500" },
  { id: 3, title: "만델라 카탈로그", author: "Alex Kister", thumbnail: "https://images.unsplash.com/photo-1499557402751-f404dc7b508d?w=500" },
  { id: 4, title: "아날로그 호러 테이프", author: "Local 58", thumbnail: "https://images.unsplash.com/photo-1516281729352-a56767222384?w=500" },
];

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">최신 업데이트</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
                {/* map 함수로 데이터 개수(4개)만큼 비디오 카드 찍어내기 */}
        {mockVideos.map((video) => (
          <Link 
            key={video.id} 
            href={`/video/${video.id}`} 
            className="flex flex-col gap-2 cursor-pointer group"
          >
            <div className="w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={video.thumbnail} 
                alt={video.title} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* 제목과 작성자 텍스트 영역 */}
            <h2 className="font-semibold text-lg mt-2">{video.title}</h2>
            <p className="text-sm text-gray-400">{video.author}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}