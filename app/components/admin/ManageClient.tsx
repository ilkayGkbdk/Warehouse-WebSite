"use client"

import React, {useCallback, useEffect, useState} from 'react';
import {Product} from "@prisma/client";
import {Button, Paper} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import toast from "react-hot-toast";
import axios from "axios";
import {useRouter} from "next/navigation";

const calculateDynamicWidth = (totalColumns: number) => {
    const screenWidth = window.innerWidth;
    return Math.max(screenWidth / totalColumns, 100);
};

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

    const [dynamicWidth, setDynamicWidth] = useState(150);

    useEffect(() => {
        const updateWidth = () => {
            const calculatedWidth = calculateDynamicWidth(10); // Example: 8 columns
            setDynamicWidth(calculatedWidth);
        };

        window.addEventListener("resize", updateWidth);
        updateWidth();

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    let rows: any = [];
    if (products) {
        rows = products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                palletCount: product.palletCount,
                category: product.category,
                brand: product.brand,
                inStock: product.inStock,
                image: product.image,
            }
        });
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: dynamicWidth },
        { field: 'name', headerName: 'Name', width: dynamicWidth },
        { field: 'price', headerName: 'Price', width: dynamicWidth },
        { field: 'palletCount', headerName: 'Pallet Count', width: dynamicWidth },
        { field: 'category', headerName: 'Category', width: dynamicWidth },
        { field: 'brand', headerName: 'Brand', width: dynamicWidth },
        { field: 'inStock',
            headerName: 'inStock',
            width: dynamicWidth,
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.inStock === true ? "Stokta Mevcut" : "Stokta Yok"}
                    </div>
                )
            }
        },
        { field: 'actions',
            headerName: 'Action',
            headerAlign: 'center',
            align: 'center',
            width: dynamicWidth,
            renderCell: (params) => {
                return (
                    <Button size='large' color='warning' onClick={() => handleDelete(params.row.id)}>
                        SİL
                    </Button>
                )
            }
        },
    ]

    return (
        <div>
            <Paper sx={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } }}}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 1 }}
                />
            </Paper>
        </div>
    );
};

export default ManageClient;
