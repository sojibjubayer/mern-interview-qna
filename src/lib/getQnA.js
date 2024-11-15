import axios from "axios";
export const dynamic="force-dynamic";
export const getQnA = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-qna`
    );
    
    return res.data;
  } catch (error) {
    return { qna: [], total: 0 };
  }
};