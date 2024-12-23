import DetailClient from "@/app/components/detail/DetailClient";
import getProductById from "@/app/actions/getProductById";

type DetailProps = {
    productId?: string
}

const DetailPage = async ({params}: {params: DetailProps}) => {
    const { productId } = params;
    const product = await getProductById({ productId });

    return (
        <div>
            <DetailClient product={product} />
        </div>
    );
};

export default DetailPage;