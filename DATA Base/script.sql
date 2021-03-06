USE [master]
GO
/****** Object:  Database [CarRent]    Script Date: 28/06/2018 22:36:29 ******/
CREATE DATABASE [CarRent]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CarRent', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\CarRent.mdf' , SIZE = 4288KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'CarRent_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\CarRent_log.ldf' , SIZE = 1088KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [CarRent] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CarRent].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CarRent] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CarRent] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CarRent] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CarRent] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CarRent] SET ARITHABORT OFF 
GO
ALTER DATABASE [CarRent] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [CarRent] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CarRent] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CarRent] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CarRent] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CarRent] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CarRent] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CarRent] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CarRent] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CarRent] SET  ENABLE_BROKER 
GO
ALTER DATABASE [CarRent] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CarRent] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CarRent] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CarRent] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CarRent] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CarRent] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CarRent] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CarRent] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CarRent] SET  MULTI_USER 
GO
ALTER DATABASE [CarRent] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CarRent] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CarRent] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CarRent] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [CarRent] SET DELAYED_DURABILITY = DISABLED 
GO
USE [CarRent]
GO
/****** Object:  Table [dbo].[branchs_tbl]    Script Date: 28/06/2018 22:36:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[branchs_tbl](
	[BranchId] [int] IDENTITY(1,1) NOT NULL,
	[Adress] [varchar](30) NOT NULL,
	[BranchName] [varchar](25) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[BranchId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cars_tbl]    Script Date: 28/06/2018 22:36:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cars_tbl](
	[CarId] [int] IDENTITY(1,1) NOT NULL,
	[CarTypeId] [int] NOT NULL,
	[ActuallyKm] [int] NOT NULL,
	[Picture] [varchar](150) NULL,
	[ProperToBeRent] [bit] NULL,
	[AvaibleToBeRent] [bit] NULL,
	[DayPrice] [int] NOT NULL,
	[DayDelayPrice] [int] NOT NULL,
	[PlateNumber] [int] NULL,
	[BranchId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[CarId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[carsType_tbl]    Script Date: 28/06/2018 22:36:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[carsType_tbl](
	[CarTypeId] [int] IDENTITY(1,1) NOT NULL,
	[ModelMake] [varchar](30) NOT NULL,
	[Model] [varchar](30) NOT NULL,
	[ModelName] [varchar](30) NOT NULL,
	[ModelYear] [varchar](30) NOT NULL,
	[ModelBody] [varchar](30) NOT NULL,
	[ModelWeightKg] [int] NULL,
	[ModelDoors] [int] NULL,
	[Gear] [varchar](7) NOT NULL,
	[BranchesCar] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[CarTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orders_tbl]    Script Date: 28/06/2018 22:36:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders_tbl](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[PickUpDate] [date] NOT NULL,
	[ReturnDate] [date] NOT NULL,
	[ActuallReturnDate] [date] NOT NULL,
	[UserId] [int] NOT NULL,
	[CarId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users_tbl]    Script Date: 28/06/2018 22:36:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users_tbl](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [varchar](15) NOT NULL,
	[Identity] [int] NOT NULL,
	[UserName] [varchar](15) NOT NULL,
	[BirthDay] [date] NULL,
	[Gender] [varchar](7) NOT NULL,
	[Email] [varchar](255) NOT NULL,
	[Passwords] [varchar](13) NOT NULL,
	[Picture] [varchar](150) NULL,
	[Rank] [varchar](10) NULL,
	[cart] [int] NULL,
 CONSTRAINT [PK__users_tb__1788CC4CE5788C84] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[branchs_tbl] ON 

INSERT [dbo].[branchs_tbl] ([BranchId], [Adress], [BranchName]) VALUES (1, N'Tel-Aviv Hshalom st.', N'REnty')
INSERT [dbo].[branchs_tbl] ([BranchId], [Adress], [BranchName]) VALUES (2, N'lo', N'gr')
INSERT [dbo].[branchs_tbl] ([BranchId], [Adress], [BranchName]) VALUES (3, N'Haifa', N'Renty')
SET IDENTITY_INSERT [dbo].[branchs_tbl] OFF
SET IDENTITY_INSERT [dbo].[cars_tbl] ON 

INSERT [dbo].[cars_tbl] ([CarId], [CarTypeId], [ActuallyKm], [Picture], [ProperToBeRent], [AvaibleToBeRent], [DayPrice], [DayDelayPrice], [PlateNumber], [BranchId]) VALUES (1, 1, 60000, NULL, 1, 1, 145, 160, 1523142, 1)
INSERT [dbo].[cars_tbl] ([CarId], [CarTypeId], [ActuallyKm], [Picture], [ProperToBeRent], [AvaibleToBeRent], [DayPrice], [DayDelayPrice], [PlateNumber], [BranchId]) VALUES (2, 2, 50000, NULL, 0, 1, 190, 200, 1452364, 1)
INSERT [dbo].[cars_tbl] ([CarId], [CarTypeId], [ActuallyKm], [Picture], [ProperToBeRent], [AvaibleToBeRent], [DayPrice], [DayDelayPrice], [PlateNumber], [BranchId]) VALUES (3, 3, 10000, NULL, 0, 0, 250, 300, 11333311, 1)
INSERT [dbo].[cars_tbl] ([CarId], [CarTypeId], [ActuallyKm], [Picture], [ProperToBeRent], [AvaibleToBeRent], [DayPrice], [DayDelayPrice], [PlateNumber], [BranchId]) VALUES (4, 4, 10000, NULL, 1, 1, 250, 300, 11333311, 2)
SET IDENTITY_INSERT [dbo].[cars_tbl] OFF
SET IDENTITY_INSERT [dbo].[carsType_tbl] ON 

INSERT [dbo].[carsType_tbl] ([CarTypeId], [ModelMake], [Model], [ModelName], [ModelYear], [ModelBody], [ModelWeightKg], [ModelDoors], [Gear], [BranchesCar]) VALUES (1, N'Acura', N'4dr Sedan (2.0L 4cyl 5A)', N'ILX', N'2018', N'Compact Cars', 2955, 4, N'Auto', N'1')
INSERT [dbo].[carsType_tbl] ([CarTypeId], [ModelMake], [Model], [ModelName], [ModelYear], [ModelBody], [ModelWeightKg], [ModelDoors], [Gear], [BranchesCar]) VALUES (2, N'Acura', N'4dr SUV (3.5L 6cyl 6A)', N'MDX', N'2017', N'Sport Utility Vehicles', 4025, 4, N'auto', N'1')
INSERT [dbo].[carsType_tbl] ([CarTypeId], [ModelMake], [Model], [ModelName], [ModelYear], [ModelBody], [ModelWeightKg], [ModelDoors], [Gear], [BranchesCar]) VALUES (3, N'Audi', N'1.8 TFSI Premium 2dr ', N'A4', N'2018', N'Compact Cars', 4512, 4, N'Auto', N'1')
INSERT [dbo].[carsType_tbl] ([CarTypeId], [ModelMake], [Model], [ModelName], [ModelYear], [ModelBody], [ModelWeightKg], [ModelDoors], [Gear], [BranchesCar]) VALUES (4, N'Audi', N'":"2.0T Premium 4dr Sedan', N'A4', N'2018', N'Compact Cars', 1423, 4, N'Manual', N'1')
INSERT [dbo].[carsType_tbl] ([CarTypeId], [ModelMake], [Model], [ModelName], [ModelYear], [ModelBody], [ModelWeightKg], [ModelDoors], [Gear], [BranchesCar]) VALUES (5, N'BMW', N'428i xDrive SULEV 2dr ', N'5 Series', N'2018', N'Subcompact Cars', 4704, 4, N'Auto', N'1')
INSERT [dbo].[carsType_tbl] ([CarTypeId], [ModelMake], [Model], [ModelName], [ModelYear], [ModelBody], [ModelWeightKg], [ModelDoors], [Gear], [BranchesCar]) VALUES (6, N'BMW', N'435i 2dr Convertible ', N'4 Series', N'2018', N'Subcompact Cars', 4755, 4, N'Auto', N'1')
INSERT [dbo].[carsType_tbl] ([CarTypeId], [ModelMake], [Model], [ModelName], [ModelYear], [ModelBody], [ModelWeightKg], [ModelDoors], [Gear], [BranchesCar]) VALUES (7, N'BMW', N'428i xDrive SULEV 2dr ', N'5 Series', N'2018', N'Subcompact Cars', 4704, 4, N'Auto', NULL)
INSERT [dbo].[carsType_tbl] ([CarTypeId], [ModelMake], [Model], [ModelName], [ModelYear], [ModelBody], [ModelWeightKg], [ModelDoors], [Gear], [BranchesCar]) VALUES (8, N'BMW', N'435i 2dr Convertible ', N'4 Series', N'2018', N'Subcompact Cars', 4755, 4, N'Auto', NULL)
SET IDENTITY_INSERT [dbo].[carsType_tbl] OFF
SET IDENTITY_INSERT [dbo].[orders_tbl] ON 

INSERT [dbo].[orders_tbl] ([OrderId], [PickUpDate], [ReturnDate], [ActuallReturnDate], [UserId], [CarId]) VALUES (1, CAST(N'2018-08-19' AS Date), CAST(N'2018-09-21' AS Date), CAST(N'2018-09-21' AS Date), 1, 1)
INSERT [dbo].[orders_tbl] ([OrderId], [PickUpDate], [ReturnDate], [ActuallReturnDate], [UserId], [CarId]) VALUES (2, CAST(N'2018-07-20' AS Date), CAST(N'2018-07-22' AS Date), CAST(N'2018-07-23' AS Date), 1, 1)
INSERT [dbo].[orders_tbl] ([OrderId], [PickUpDate], [ReturnDate], [ActuallReturnDate], [UserId], [CarId]) VALUES (3, CAST(N'2014-01-01' AS Date), CAST(N'2017-03-02' AS Date), CAST(N'2017-07-08' AS Date), 3, 1)
SET IDENTITY_INSERT [dbo].[orders_tbl] OFF
SET IDENTITY_INSERT [dbo].[users_tbl] ON 

INSERT [dbo].[users_tbl] ([UserId], [FullName], [Identity], [UserName], [BirthDay], [Gender], [Email], [Passwords], [Picture], [Rank], [cart]) VALUES (1, N'khaled abek', 200620488, N'khalbek', CAST(N'1988-07-19' AS Date), N'Male', N'khaledab102@gmail.com', N'khal123!', NULL, N'Admin', 1)
INSERT [dbo].[users_tbl] ([UserId], [FullName], [Identity], [UserName], [BirthDay], [Gender], [Email], [Passwords], [Picture], [Rank], [cart]) VALUES (2, N'Katia Avko', 200312642, N'Kato', CAST(N'1999-08-20' AS Date), N'Female', N'katia@gmail.com', N'Kaka1@', NULL, NULL, 2)
INSERT [dbo].[users_tbl] ([UserId], [FullName], [Identity], [UserName], [BirthDay], [Gender], [Email], [Passwords], [Picture], [Rank], [cart]) VALUES (3, N'SysAdmin', 123456789, N'Admin', NULL, N'--', N'Admin@admin.com', N'Admin1!', NULL, N'Admin', 3)
SET IDENTITY_INSERT [dbo].[users_tbl] OFF
/****** Object:  Index [UQ__users_tb__6E2BA98B9291056E]    Script Date: 28/06/2018 22:36:29 ******/
ALTER TABLE [dbo].[users_tbl] ADD  CONSTRAINT [UQ__users_tb__6E2BA98B9291056E] UNIQUE NONCLUSTERED 
(
	[Identity] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[cars_tbl]  WITH CHECK ADD FOREIGN KEY([BranchId])
REFERENCES [dbo].[branchs_tbl] ([BranchId])
GO
ALTER TABLE [dbo].[cars_tbl]  WITH CHECK ADD FOREIGN KEY([CarTypeId])
REFERENCES [dbo].[carsType_tbl] ([CarTypeId])
GO
USE [master]
GO
ALTER DATABASE [CarRent] SET  READ_WRITE 
GO
