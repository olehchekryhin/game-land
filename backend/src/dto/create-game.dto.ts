export class CreateGameDto {
    gameId: string;
    userId?: string;
    userIdAdditional?: string;
    winner: string;
    data: any;
}
