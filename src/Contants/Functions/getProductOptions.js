// import CategoryResponse from "../CategoryResponse";

const convertToSlug = (Text) => {
    return Text
        .toLowerCase()
        .replace(/ /g, '-');
};

export const getCategoryOptions = (categoryResponse) => {
    const categories = categoryResponse?.map(ele => {
        return { value: ele?.slug, label: ele?.name };
    }) || [];
    
    return [...categories, { value: 'other', label: 'Other' }];
};

const getProductOptions = (selectedCategory, categoryResponse) => {
    if (selectedCategory === 'other') {
        return [{ value: 'other', label: 'Other' }];
    }

    const selectedCategoryData = categoryResponse?.find(ele => ele?.slug === selectedCategory);

    if (selectedCategoryData) {
        const subCategoryOptions = selectedCategoryData?.subCategories?.map(ele => {
            return { value: convertToSlug(ele?.name), label: ele?.name };
        });

        const productOptions = selectedCategoryData?.subCategories?.map(ele => {
            return ele?.products?.map(product => {
                return { value: convertToSlug(product?.name), label: product?.name };
            });
        });

        const products = productOptions.flat();
        return [...subCategoryOptions, ...products];
    }
    return [];
};

export default getProductOptions;