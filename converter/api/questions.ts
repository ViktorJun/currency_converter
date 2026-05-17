export async function POST(request: Request) {
    const body = await request.json();

    return Response.json(
        {
            success: true,
            message: 'Форму успішно отримано',
            received: body,
        },
        { status: 201 }
    );
}