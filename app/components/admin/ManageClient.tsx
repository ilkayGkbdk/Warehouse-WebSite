"use client"

import React, {useCallback} from 'react';
import {Product} from "@prisma/client";
import {Button, Paper} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import toast from "react-hot-toast";
import axios from "axios";
import {useRouter} from "next/navigation";

interface ManageClientProps {
    products: Product[]
}

const ManageClient:React.FC<ManageClientProps> = ({products}) => {

    const router = useRouter();

    const handleDelete = useCallback(async (id: string) => {
        const toastId = toast.loading('Ürün silinirken bekleyin');
        axios.delete(`/api/product/${id}`).then(() => {
            toast.success('Ürün silindi', { id: toastId });
            router.refresh();
        })
            .catch((error: any) => {
                console.log(error);
            });
    }, []);

    let rows: any = [];
    if (products) {
        rows = products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                brand: product.brand,
                inStock: product.inStock,
                image: product.image,
            }
        });
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'category', headerName: 'Category', width: 100 },
        { field: 'brand', headerName: 'Brand', width: 100 },
        { field: 'inStock',
            headerName: 'inStock',
            width: 100,
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.inStock === true ? "Stokta Mevcut" : "Stokta Yok"}
                    </div>
                )
            }
        },
        { field: 'actions',
            headerName: 'Aciton',
            width: 100,
            renderCell: (params) => {
                return (
                    <Button className='text-red-500' onClick={() => handleDelete(params.row.id)}>
                        SİL
                    </Button>
                )
            }
        },
    ]

    return (
        <div>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } }}}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </div>
    );
};

export default ManageClient;
