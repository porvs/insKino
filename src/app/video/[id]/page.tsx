// 1. 함수 맨 앞에 'async'를 붙여줍니다.
// 2. params의 타입을 Promise로 감싸줍니다.
export default async function VideoDetail({ params }: { params: Promise<{ id: string }> }) {
  
  // 3. await를 사용해 주소창의 값을 완전히 읽어올 때까지 기다린 후 꺼냅니다!
  const resolvedParams = await params;
  
  return (
    <main className="p-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-red-500">
        비디오 상세 페이지
      </h1>
      <p className="text-xl">
        현재 주소창에서 읽어온 비디오 번호는 <span className="text-yellow-400 font-bold">{resolvedParams.id}</span>번 입니다!
      </p>
    </main>
  );
}